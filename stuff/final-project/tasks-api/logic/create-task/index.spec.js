require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const createTask = require('.')
const { random } = Math
const { database, models: { Task } } = require('tasks-data')

describe('logic - create task', () => {
    before(() => database.connect(TEST_DB_URL))

    let title

    beforeEach(async () => {
        title = `title-${random()}`
    })

    it('should succeed on create task', async () => {
        const taskId = await createTask(title)

        expect(taskId).to.exist
        expect(taskId).to.be.a('string')
        expect(taskId).to.have.length.greaterThan(0)

        const task = await Task.findById(taskId)

        expect(task).to.exist
        expect(task.title).to.equal(title)
        expect(task.done).to.equal(false)
        expect(task.createdAt).to.exist
        // expect(task.date).to.be.instanceOf(Date)
    })

    // TODO other test cases

    after(() => Promise.all([Task.deleteMany()]).then(database.disconnect))
})
