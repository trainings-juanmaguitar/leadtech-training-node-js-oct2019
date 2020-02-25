const { model } = require('mongoose')
const { task } = require('./schemas')

module.exports = {
    Task: model('Task', task)
}