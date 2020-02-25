const Cat = require('../../models/Cat')

function getCats( req, res ) {
  Cat.find()
      .then( cats => res.json(cats) )
      .catch( err => console.log(err) )
}

module.exports = getCats