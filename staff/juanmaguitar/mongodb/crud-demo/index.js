const  {MongoClient, ObjectId} = require('mongodb')

const USER = `leadtech`
const PASSWORD = `leadtech12345`

const URL = `mongodb://${USER}:${PASSWORD}@ds145303.mlab.com:45303/tasksdb`
const ATLAS_URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0-ks1cj.mongodb.net/test?retryWrites=true&w=majority`

const DB_NAME = "tasksdb"
const COLLECTION_NAME = "tasks";

const client = new MongoClient(ATLAS_URL, {useNewUrlParser: true,  useUnifiedTopology: true});

// Use connect method to connect to the server
client.connect(async function(err) {
  console.log("Connected successfully to server");

  const db = client.db(DB_NAME);

  const collection = db.collection(COLLECTION_NAME);

  // Find some documents
  const docsBefore = await collection.find().toArray();
  console.log(docsBefore)

  /* ------------ REMOVE ------------ */

  // const ID_TO_REMOVE = '5995b7595200c20011ac0fce'
  // console.log(`remove ${ID_TO_REMOVE}...`)
  // await collection.deleteOne({ _id : ObjectId(ID_TO_REMOVE) })

  /* ------------ ADD ------------ */

  const TASK_TO_ADD = {
    title: 'new Task',
    createdAt: +new Date(),
    done: false
  }
  console.log(`add ${JSON.stringify(TASK_TO_ADD)}...`)
  await collection.insertOne(TASK_TO_ADD)

  const docsAfter = await collection.find({}).toArray();
  console.log(docsAfter)

  client.close();
});