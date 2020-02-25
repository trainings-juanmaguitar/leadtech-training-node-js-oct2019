require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const listTasks = require('.')
const { random } = Math
const { database, models: { Task } } = require('tasks-data')

describe('logic - list tasks', () => {
    before(() => database.connect(TEST_DB_URL))

    let taskIds, titles, descriptions

    beforeEach(async () => {

        await Promise.all([Task.deleteMany()])

        taskIds = []
        titles = []

        const insertions = []

        for (let i = 0; i < 10; i++) {
            const task = { title: `title-${random()}` }
            insertions.push(Task.create(task).then(task => taskIds.push(task.id)))
            titles.push(task.title)
        }

        for (let i = 0; i < 10; i++)
            insertions.push(Task.create({
                title: `title-${random()}`
            }))

        await Promise.all(insertions)
    })

    it('should succeed on get tasks list', async () => {
        const tasks = await listTasks()

        expect(tasks).to.exist
        expect(tasks).to.have.lengthOf(10)

        tasks.forEach(task => {
            expect(task.id).to.exist
            expect(task.id).to.be.a('string')
            expect(task.id).to.have.length.greaterThan(0)
            expect(task.id).be.oneOf(taskIds)

            expect(task.title).to.exist
            expect(task.title).to.be.a('string')
            expect(task.title).to.have.length.greaterThan(0)
            expect(task.title).be.oneOf(titles)

            expect(task.done).to.exist
            expect(task.done).to.be.a('boolean')

            // expect(task.createdAt).to.exist
            // expect(task.createdAt).to.be.an.instanceOf(Date)
        })
    })

    // TODO other test cases

    after(() => Promise.all([Task.deleteMany()]).then(database.disconnect))
})
