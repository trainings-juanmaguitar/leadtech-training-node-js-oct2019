const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const assert = require('assert');
const bodyparser = require('body-parser')

const app = express()
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

  app.get('/tasks', async (req,res) => {
    const docs = await collection.find({}).toArray()
    res.json(docs)
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

  /*
  {
    title: "loquesea" ,
    createdAt: +new Date(),
    done: false
  }
  */

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