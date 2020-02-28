require('dotenv').config()

const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const listTasks = require('.')
const mongoose = require('mongoose');

const Task = require('../../models/Task')

describe('listTasks', () => {

  before(() => {
    mongoose.connect(DB_URL_TEST, { 
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useFindAndModify: false 
    });
  })

  let taskIds, titles

  beforeEach(async () => {

    await Task.deleteMany()

    taskIds = []
    titles = []

    const insertions = []

    for (let i = 0; i < 10; i++) {
        const task = { title: `title-${Math.random()}` }
        titles.push(task.title)
        insertions.push(Task.create(task).then(task => taskIds.push(task.id)))
    }
    
    await Promise.all(insertions)            

  })

  it('should be a function', () => {
    expect(typeof listTasks).to.equal('function')
  }) 

  it('should return the list of tasks', async () => {

    const tasks = await listTasks()

    expect(tasks).to.exist
    expect(tasks).to.have.lengthOf(10)

    const firstTask = tasks[0]
    expect(firstTask).to.exist

    expect(firstTask.id).to.exist
    expect(firstTask.id).to.be.a('string')
    expect(firstTask.id).to.have.length.greaterThan(0)
    expect(firstTask.id).be.oneOf(taskIds)

    expect(firstTask.title).to.exist
    expect(firstTask.title).to.be.a('string')
    expect(firstTask.title).to.have.length.greaterThan(0)
    expect(firstTask.title).be.oneOf(titles)

    expect(firstTask.done).to.exist
    expect(firstTask.done).to.be.a('boolean')

  }) 


  after(async () => {
    await Task.deleteMany()
    mongoose.disconnect()
  })

})

