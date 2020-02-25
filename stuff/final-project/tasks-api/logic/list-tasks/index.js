const { models: { Task } } = require('tasks-data')

module.exports = function () {
    return (async () => {
        const tasks = await Task.find().lean()
        return tasks
    })()
}
