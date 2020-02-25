const Task = require('../../models/Task')

function getTasks( req, res ) {
  Task.find()
      .then( Tasks => res.json(Tasks) )
      .catch( err => console.log(err) )
}

module.exports = getTasks