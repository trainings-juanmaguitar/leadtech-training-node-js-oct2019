const EventEmitter = require('events').EventEmitter;
const logger = new EventEmitter();

logger.on('error', function(message, time){
    console.log(time + ' → ERR: ' + message);
});

// logger.on('error', function(message, time){
//     console.log('ecooo....');
// });

module.exports = logger