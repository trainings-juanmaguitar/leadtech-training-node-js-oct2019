const Cat = require('../../models/Cat')

function removeCatById(req, res) {
  const { id } = req.params
  return Cat.findByIdAndRemove(id)
                .then( response =>
                    res.status(200).json({ msg: `cat w/ id ${id} removed properly` })
                )
}

module.exports = removeCatById