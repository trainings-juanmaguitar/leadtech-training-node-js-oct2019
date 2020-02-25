const { validate, errors: { ContentError, NotFoundError } } = require('tasks-util')
const { ObjectId, models: { Task } } = require('tasks-data')

module.exports = function (taskId, title, done) {

    validate.string(taskId)
    validate.string.notVoid('task id', taskId)
    if (!ObjectId.isValid(taskId)) throw new ContentError(`${taskId} is not a valid task id`)

    if (title) {
        validate.string(title)
        validate.string.notVoid('title', title)
    }

    if (done) {
        validate.boolean(status)
    }

    return (async () => {
        const task = await Task.findById(taskId)
        if (!task) throw new NotFoundError(`task with id ${taskId} does not exist`)

        const update = {}
        title && (update.title = title)
        done && (update.done = done)

        await Task.updateOne({ _id: ObjectId(taskId) }, { $set: update })
    })()
}
