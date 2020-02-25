const Task = require('../../models/Task')

function removeTaskById(req, res) {
  const { id } = req.params
  return Task.findByIdAndRemove(id)
                .then( response =>
                    res.status(200).json({ msg: `Task w/ id ${id} removed properly` })
                )
}

module.exports = removeTaskById