const express = require('express')
const router = express.Router()

const Task = require('../../models/Task')

router.get('/tasks',  async (req,res) => {
  const query = {}

  const docs = await Task.find(query).lean()
  console.log(docs)
  res.json(docs)
})

router.post('/tasks', async (req,res) => {
  const {title} = req.body
  const task = new Task({ title }) 
  try {
    await task.save()
  }
  catch(e) {
    res.status(500).json({e})  
  }
  res.status(200).json({msg: `task added correcly`})  
})

module.exports = router