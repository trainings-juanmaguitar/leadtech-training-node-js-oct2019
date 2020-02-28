const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaTask = new Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  done: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', schemaTask)