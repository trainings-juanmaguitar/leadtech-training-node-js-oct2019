const express = require('express')
const mongoose = require('mongoose');
const bodyparser = require('body-parser')

const {ATLAS_URL} = require('./db/')
console.log({ATLAS_URL})
const [,,PORT = 3001]  = process.argv

mongoose.connect(ATLAS_URL, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true, 
  useFindAndModify: false 
});

const routesTasks = require('./routes/tasks')

const app = express()

app.use(bodyparser.urlencoded({ extended : false }))
app.use(routesTasks)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}...`);
