const { validate, errors: { NotFoundError, ContentError } } = require('tasks-util')
const { ObjectId, models: { Task } } = require('tasks-data')

module.exports = function (taskId) {

    validate.string(taskId)
    validate.string.notVoid('task id', taskId)
    if (!ObjectId.isValid(taskId)) throw new ContentError(`${taskId} is not a valid task id`)

    return (async () => {
        const task = await Task.findById(taskId)
        if (!task) throw new NotFoundError(`task with id ${taskId} does not exist`)

        await Task.deleteOne({ _id: ObjectId(taskId) })
    })()
}
