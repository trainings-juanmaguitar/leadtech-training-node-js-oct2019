const Task = require('../../models/Task')

function getTaskById( req,res ) {
  const { id } = req.params
  Task.findById(id)
        .then( Task => res.json(Task) )
        .catch( err => console.log(err) )
}

module.exports = getTaskById