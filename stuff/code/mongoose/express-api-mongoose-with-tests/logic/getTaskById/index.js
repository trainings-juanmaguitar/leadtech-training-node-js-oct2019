const Task = require('../../models/Task')
const mongoose = require('mongoose')

module.exports = async id => {
  // TO-DO apply query
  try {
    const task = await Task.findById(id)
    return task
  }
  catch(e) {
    throw new Error(`task w/ id ${id} couldn't be found`)
  }
  
}