const express = require('express')
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

const {DB_URL}  = process.env
const [,,PORT = 3001]  = process.argv

mongoose.connect(DB_URL, { 
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
