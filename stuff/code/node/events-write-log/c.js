const logger = require('./logger')

module.exports = () => {
  setTimeout(() => {
    logger.emit('error', 'Eggs Cracked', +new Date());
  }, 1000)
}