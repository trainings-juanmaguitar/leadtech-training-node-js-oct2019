require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const removeTask = require('.')
const { random } = Math
const { errors: { NotFoundError, ConflictError } } = require('tasks-util')
const { database, ObjectId, models: { User, Task } } = require('tasks-data')

require('tasks-util').polyfills.arrayRandom()

describe('logic - remove task', () => {
    before(() => database.connect(TEST_DB_URL))

    let taskIds, titles, descriptions

    beforeEach(async () => {

        await Task.deleteMany()

        taskIds = []
        titles = []
        descriptions = []

        const insertions = []

        for (let i = 0; i < 10; i++) {
            const task = { title: `title-${random()}` }

            insertions.push(Task.create(task)
                .then(task => taskIds.push(task.id)))

            titles.push(task.title)
        }

        await Promise.all(insertions)
    })

    it('should succeed on removing task', async () => {
        const taskId = taskIds.random()

        const response = await removeTask(taskId)
        expect(response).to.not.exist

        const task = await Task.findById(taskId)
        expect(task).to.not.exist
    })


    it('should fail on unexisting task data', async () => {
        const taskId = ObjectId().toString()

        try {
            await removeTask(taskId)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`task with id ${taskId} does not exist`)
        }
    })

    // TODO other test cases

    after(() => Task.deleteMany().then(database.disconnect))
})
