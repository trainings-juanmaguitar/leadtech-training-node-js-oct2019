const Cat = require('../../models/Cat')

function updateCatById(req, res) {
  const { id } = req.params
  const { name } = req.body
  Cat.findByIdAndUpdate(id, { name })
        .then( response => res.status(200).json({ msg: `cat w/ id ${id} updated properly` }) )
}

module.exports = updateCatById