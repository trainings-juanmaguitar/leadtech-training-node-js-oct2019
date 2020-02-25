const Task = require('../../models/Task')
const {removeUndefinedProps} = require('../../helpers/')

function updateTaskById(req, res) {
  const { id } = req.params
  const { done, title } = req.body

  Task.findByIdAndUpdate(id, removeUndefinedProps({ done, title }))
        .then( response => res.status(200).json({ msg: `Task w/ id ${id} updated properly` }) )
}

module.exports = updateTaskById