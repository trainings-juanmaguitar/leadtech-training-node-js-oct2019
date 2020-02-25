const Task = require('../../models/Task')

function addTask(req, res) {
  const { title } = req.body
  const task = new Task({ title });
  task.save()
    .then( response =>
        res.status(200).json({ msg: `Task w/ name ${name} added properly` })
    )
    .catch( error =>
        res.status(500).json({ msg: error })
    )
}

module.exports = addTask