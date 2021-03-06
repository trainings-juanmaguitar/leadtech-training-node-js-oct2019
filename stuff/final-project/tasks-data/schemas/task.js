const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Schema.Types.Boolean.convertToFalse.add('false');
mongoose.Schema.Types.Boolean.convertToTrue.add('true');

module.exports = new Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type : Date, 
    default: Date.now
  },
  done: {
    type : Boolean, 
    default: false
  }
})
