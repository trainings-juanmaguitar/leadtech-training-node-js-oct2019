const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose');

const USER = `leadtech`
const PASSWORD = `leadtech12345`

const ATLAS_URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0-ks1cj.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(ATLAS_URL, { useUnifiedTopology: true, useNewUrlParser: true  });

const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( routes )

app.listen(3004)
console.log('Listening on PORT 3004...');
