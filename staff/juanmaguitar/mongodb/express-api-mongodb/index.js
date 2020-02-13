const express = require('express')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

const app = express()

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

  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
  })

  // Find some documents
  // client.close();

  
});