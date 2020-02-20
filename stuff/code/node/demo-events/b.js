const logger = require('./logger')

module.exports = () => {
  setTimeout(() => {
    logger.emit('error', 'Golden Car', +new Date());
}, 3000)
}