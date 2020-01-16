const EventEmitter = require('events').EventEmitter;
const logger = new EventEmitter();
const fs = require('fs');

logger.on('error', function (message, time) {
    console.log('Time: ' + time + '- Err: ' + message + '\n')
});

logger.on('error', function (message, time) {
    console.log('ecooooo......')
});

logger.on('error', function (message, time) {
    fs.appendFile('log.txt', message, () => {
        console.log('log item written');
    })
});

module.exports = logger;


// setTimeout(() => {
//     logger.emit('error', 'Spilled Milk', new Date());
// }, 2000);
//
// setTimeout(() => {
//     logger.emit('error', 'Eggs Cracked', new Date());
// }, 3000);
