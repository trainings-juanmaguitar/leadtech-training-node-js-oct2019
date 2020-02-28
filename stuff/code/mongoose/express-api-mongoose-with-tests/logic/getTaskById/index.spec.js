require('dotenv').config()

const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const getTaskById = require('.')
const mongoose = require('mongoose');

const Task = require('../../models/Task')

describe('getTaskById', () => {

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
    expect(typeof getTaskById).to.equal('function')
  }) 

  it('should return a task given its id', async () => {

    const task = await getTaskById(taskIds[0])
    
    expect(task).to.exist

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

  }) 


  after(async () => {
    await Task.deleteMany()
    mongoose.disconnect()
  })

})

