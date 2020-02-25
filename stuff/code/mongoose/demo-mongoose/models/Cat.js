const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaCat = new Schema({
  name: {
    type: String,
    required: true
  },
  race: {
    type: String,
    default: 'cat'
  }
})

schemaCat.statics.getCatsNamesByMaxLengthName = function(length) {
  return this.find()
                .then( cats => cats.filter( cat => {
                  const lengtName = cat.name ? cat.name.length : 0
                  return lengtName <= length
                } ))
                .then( cats => cats.map( cat => cat.name || ''))
};

module.exports = mongoose.model('Cat', schemaCat)