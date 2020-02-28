const express = require('express')
const router = express.Router()

const { createTask, listTasks, getTaskById } = require('../../logic/')

router.get('/tasks/:taskId',  async (req,res) => {
  const {taskId} = req.params
  try {
    const task = await getTaskById(taskId)
    res.status(200).json(task)
  }
  catch(e) {
    res.status(500).json({e})  
  }

})

router.get('/tasks',  async (req,res) => {
  const query = {}
  try {
    const tasks = await listTasks(query)
    res.status(200).json(tasks)
  }
  catch(e) {
    res.status(500).json({e})  
  }
})

router.post('/tasks', async (req,res) => {
  const {title} = req.body
  let newTask
  try {
    newTask = await createTask({ title })
    res.status(200).json({msg: `task ${newTask} added correcly`})  
  }
  catch(e) {
    res.status(500).json({e})  
  }
})

module.exports = router