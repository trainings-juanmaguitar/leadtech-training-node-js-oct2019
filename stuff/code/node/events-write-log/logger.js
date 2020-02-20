const EventEmitter = require('events').EventEmitter;
const fs = require('fs')
const logger = new EventEmitter();

const logFile = fs.createWriteStream('logs2.txt')

logger.on('error', function(message, time){
    const logItem = time + ' → ERR: ' + message + '\n'
    logFile.write(logItem)
    // fs.appendFile('logs.txt', logItem, () => {
    //     console.log('logItem written');
    // })
});

// logger.on('error', function(message, time){
//     console.log('ecooo....');
// });

module.exports = logger