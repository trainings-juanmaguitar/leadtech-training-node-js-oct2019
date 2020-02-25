const { validate } = require('tasks-util')
const { models: { Task } } = require('tasks-data')

module.exports = title => {
    validate.string(title)
    validate.string.notVoid('title', title)

    return (async () => {
        const task = await Task.create({ title })
        return task.id
    })()
}