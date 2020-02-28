const Task = require('../../models/Task')

module.exports = async ({ title }) => {
  // TO-DO: Add validation data

  const task = new Task({ title }) 
  try {
    await task.save()
    return task.id
  }
  catch(e) {
    throw new Error(`task with title ${title} could not be created`)
  }

}