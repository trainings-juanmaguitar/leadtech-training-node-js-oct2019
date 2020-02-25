const express = require('express')
const router = express.Router()

const getTasks = require('./handlers/getTasks')
const addTask = require('./handlers/addTask')

const getTaskById = require('./handlers/getTaskById')
const updateTaskById = require('./handlers/updateTaskById')
const removeTaskById = require('./handlers/removeTaskById')

router.get('/tasks', getTasks)
router.post('/tasks', addTask)

router.get('/task/:id', getTaskById)
router.put('/task/:id', updateTaskById)
router.delete('/task/:id', removeTaskById)

module.exports =  router