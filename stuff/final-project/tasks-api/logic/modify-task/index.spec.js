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
        await Promise.all([Task.deleteMany()])

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

        const { done } = await Task.findById(taskId)
        const response = await modifyTask(taskId, undefined, newDoneStatus)

        expect(response).to.not.exist

        const task = await Task.findById(taskId)

        expect(task.title).to.exist
        expect(task.title).to.be.a('string')
        expect(task.title).to.have.length.greaterThan(0)
        expect(task.title).to.equal(title)

        expect(task.done).to.exist
        expect(task.done).to.be.a('boolean')
        expect(task.done).to.equal(done)

    })


    it('should fail on correct user and unexisting task data', async () => {
        const taskId = ObjectId().toString()
        const newTitle = `new-title-${random()}`
        const newDescription = `new-description-${random()}`
        const newStatus = statuses.random()

        try {
            await modifyTask(id, taskId, newTitle, newDescription, newStatus)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(NotFoundError)
            expect(error.message).to.equal(`user does not have task with id ${taskId}`)
        }
    })

    it('should fail on correct user and wrong task data', async () => {
        const { _id } = await Task.findOne({ _id: { $nin: taskIds.map(taskId => ObjectId(taskId)) } })

        const taskId = _id.toString()
        const newTitle = `new-title-${random()}`
        const newDescription = `new-description-${random()}`
        const newStatus = statuses.random()

        try {
            await modifyTask(id, taskId, newTitle, newDescription, newStatus)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(ConflictError)
            expect(error.message).to.equal(`user with id ${id} does not correspond to task with id ${taskId}`)
        }
    })

    it('should fail on correct user and wrong task status', () => {
        const taskId = taskIds.random()
        const newTitle = `new-title-${random()}`
        const newDescription = `new-description-${random()}`
        const newStatus = 'wrong-status'

        expect(() => modifyTask(id, taskId, newTitle, newDescription, newStatus)).to.throw(ContentError, `${newStatus} does not match any of the valid status values: ${statuses}`)
    })

    // TODO other test cases

    after(() => Promise.all([User.deleteMany(), Task.deleteMany()]).then(database.disconnect))
})
