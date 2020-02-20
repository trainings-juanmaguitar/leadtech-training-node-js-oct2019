const logger = require('./logger')

module.exports = function() {
  setTimeout(() => {
    logger.emit('error', 'Spilled Milk', +new Date());
  }, 2000)
}