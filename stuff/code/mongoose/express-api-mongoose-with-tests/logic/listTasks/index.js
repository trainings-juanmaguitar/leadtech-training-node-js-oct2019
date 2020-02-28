const Task = require('../../models/Task')

module.exports = async query => {
  // TO-DO apply query
  try {
    const tasks = await Task.find()
    return tasks
  }
  catch(e) {
    throw new Error(`tasks list couldn't be retrieved`)
  }
  
}