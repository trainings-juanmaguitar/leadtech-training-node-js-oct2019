const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const assert = require('assert');
const bodyparser = require('body-parser')
const {fromBoolStringToBoolean} = require('./helpers')
const moment = require('moment')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug');

app.use(bodyparser.urlencoded({ extended : false }))
const [,,PORT = 3001]  = process.argv

const USER = `leadtech`
const PASSWORD = `leadtech12345`

const URL = `mongodb://${USER}:${PASSWORD}@ds145303.mlab.com:45303/tasksdb`
const ATLAS_URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0-ks1cj.mongodb.net/test?retryWrites=true&w=majority`

const DB_NAME = "tasksdb"
const COLLECTION_NAME = "tasks";

const client = new MongoClient(ATLAS_URL, {useNewUrlParser: true,  useUnifiedTopology: true});

// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);

  /*
    /tasks
    /tasks?done=true
    /tasks?done=false
  */


  app.get('/tasks', async (req,res) => {
    const {done: doneReqQuery} = req.query
    const done = fromBoolStringToBoolean(doneReqQuery)
    const query = {}
    if (done !== undefined) query.done = done

    const tasks = await collection.find(query).toArray()
      
    res.render('tasks', {
      tasks: tasks.map(task => ({
        ...task,
        createdAt: moment(task.createdAt).format("MMM Do YYYY")   
      }))
    })
  })

  // 5e4555bf1c9d440000365b55
  // localhost:3001/task/5e4555bf1c9d440000365b55
  app.get('/task/:idTask', async (req,res) => {
    const {idTask} = req.params
    const task = await collection.find({
      _id: ObjectId(idTask)
    }).toArray()
    res.json(task)
  })
  
  app.delete('/task/:idTask', async (req,res) => {
    const {idTask} = req.params
    try {
      await collection.deleteOne({ _id: ObjectId(idTask) })
    }
    catch(e) {
      res.status(500).json({e})  
    }
    res.status(200).json({msg: `task ${idTask} removed correcly`})  
  })

  app.put('/task/:idTask', async (req,res) => {
    const {idTask} = req.params
    const {done: doneReqBody} = req.body

    const done = fromBoolStringToBoolean(doneReqBody)
    if (done === undefined) res.status(500).json({msg: `task ${idTask} coultn't be updated. Bad argument.`})  

    await collection.updateOne(
      { _id: ObjectId(idTask) },
      { $set: { done } }
    )

    res.status(200).json({msg: `task ${idTask} updated correcly`})  

  })
  

  app.post('/tasks', async (req,res) => {
    const {title} = req.body
    const createdAt = +new Date()
    const done = false

    const newTask = { title, createdAt, done }
    try {
      await collection.insertOne(newTask)
    }
    catch(e) {
      res.status(500).json({e})  
    }
    res.status(200).json({msg: `task added correcly`})  
  })

  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
  })

  // Find some documents
  // client.close();

  
});