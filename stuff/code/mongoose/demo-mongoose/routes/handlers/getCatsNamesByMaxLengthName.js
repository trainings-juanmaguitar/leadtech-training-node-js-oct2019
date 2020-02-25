const Cat = require('../../models/Cat')

function getCatsNamesByMaxLengthName( req, res ) {
  const { length } = req.params
  Cat.getCatsNamesByMaxLengthName(length)
    .then( cats => res.json(cats) )
    .catch( err => console.log(err) )
}

module.exports = getCatsNamesByMaxLengthName