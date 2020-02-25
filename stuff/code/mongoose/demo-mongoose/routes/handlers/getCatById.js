const Cat = require('../../models/Cat')

function getCatById( req,res ) {
  const { id } = req.params
  Cat.findById(id)
        .then( cat => res.json(cat) )
        .catch( err => console.log(err) )
}

module.exports = getCatById