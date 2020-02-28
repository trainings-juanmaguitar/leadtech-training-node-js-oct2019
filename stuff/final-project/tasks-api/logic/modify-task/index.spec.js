require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const modifyTask = require('.')
const { random } = Math
const { errors: { NotFoundError, ConflictError, ContentError }, polyfills: { arrayRandom } } = require('tasks-util')
const { database, ObjectId, models: { Task } } = require('tasks-data')

arrayRandom()

describe('logic - modify task', () => {
    before(() => database.connect(TEST_DB_URL))

    const statuses = [true, false]
    let taskIds, titles

    beforeEach(async () => {
        await Task.deleteMany()

        taskIds = []
        titles = []

        const insertions = []

        for (let i = 0; i < 10; i++) {
            const task = { title: `title-${random()}` }
            insertions.push(Task.create(task)
                .then(task => taskIds.push(task.id)))

            titles.push(task.title)
        }

        await Promise.all(insertions)
    })

    it('should succeed updating several values on task', async () => {
        const taskId = taskIds.random()
        const newTitle = `new-title-${random()}`
        const newDoneStatus = statuses.random()

        const response = await modifyTask(taskId, newTitle, newDoneStatus)

        expect(response).to.not.exist

        const task = await Task.findById(taskId)

        expect(task.title).to.exist
        expect(task.title).to.be.a('string')
        expect(task.title).to.have.length.greaterThan(0)
        expect(task.title).to.equal(newTitle)

        expect(task.done).to.exist
        expect(task.done).to.be.a('boolean')
        expect(task.done).to.equal(newDoneStatus)

    })

    it('should succeed updating only one value on task', async () => {
        const taskId = taskIds.random()
        const newDoneStatus = statuses.random()

        const { title } = await Task.findById(taskId)
        const response = await modifyTask(taskId, undefined, newDoneStatus)

        expect(response).to.not.exist

        const task = await Task.findById(taskId)

        expect(task.title).to.exist
        expect(task.title).to.be.a('string')
        expect(task.title).to.have.length.greaterThan(0)
        expect(task.title).to.equal(title)

        expect(task.done).to.exist
        expect(task.done).to.be.a('boolean')
        expect(task.done).to.equal(newDoneStatus)

    })


    it('should fail on unexisting task', async () => {
        const taskId = ObjectId().toString()
        const newTitle = `new-title-${random()}`
        const newDoneStatus = statuses.random()

        try {
            await modifyTask(taskId, newTitle, newDoneStatus)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`task with id ${taskId} does not exist`)
        }
    })

    it('should fail on bad task id format', async () => {
        const taskId = '12345'
        const newTitle = `new-title-${random()}`
        const newDoneStatus = statuses.random()

        try {
            await modifyTask(taskId, newTitle, newDoneStatus)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(ContentError)
            expect(error.message).to.equal(`${taskId} is not a valid task id`)
        }
    })


    // TODO other test cases

    after(() => Task.deleteMany().then(database.disconnect))
})
