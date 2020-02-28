const { Router } = require('express')
const { createTask, listTasks, modifyTask, removeTask } = require('../../logic')
const { env: { SECRET } } = process
const bodyParser = require('body-parser')
const { errors: { NotFoundError, ConflictError } } = require('tasks-util')

const jsonBodyParser = bodyParser.json()

const router = Router()

router.post('/', (req, res) => {
    try {
        const { body: { title } } = req
        createTask(title)
            .then(id => res.status(201).json({ id }))
            .catch(error => {
                const { message } = error
                if (error instanceof NotFoundError) return res.status(404).json({ message })
                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})

router.get('/', (req, res) => {
    try {
        listTasks()
            .then(tasks => res.json(tasks))
            .catch(error => {
                const { message } = error
                if (error instanceof NotFoundError) return res.status(404).json({ message })
                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})

router.patch('/:taskId', (req, res) => {
    try {
        const { params: { taskId }, body: { title, done } } = req
        modifyTask(taskId, title, done)
            .then(() =>
                res.end()
            )
            .catch(error => {
                const { message } = error
                if (error instanceof NotFoundError) return res.status(404).json({ message })
                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})

router.delete('/:taskId', (req, res) => {
    try {
        const { params: { taskId } } = req

        removeTask(taskId)
            .then(() =>
                res.end()
            )
            .catch(error => {
                const { message } = error
                if (error instanceof NotFoundError) return res.status(404).json({ message })
                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})

module.exports = router