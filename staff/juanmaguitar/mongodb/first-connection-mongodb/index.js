const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

const USER = `leadtech`
const PASSWORD = `leadtech12345`
const URL = `mongodb://${USER}:${PASSWORD}@ds145303.mlab.com:45303/tasksdb`

const DB_NAME = "tasksdb"
const COLLECTION_NAME = "tasks";

const client = new MongoClient(URL, {useNewUrlParser: true,  useUnifiedTopology: true});

// Use connect method to connect to the server
client.connect(async function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION_NAME);

  // Find some documents
  const docs = await collection.find({}).toArray()
  
  console.log("Found the following records");
  console.log(docs)
  client.close();

    

});