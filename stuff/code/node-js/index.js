// CommonJS

const hello = require('./custom_hello');
const {goodbye} = require('./custom_goodbye');

const cool = require('cool-ascii-faces')

console.log(process.cwd())
console.log(process.argv)

// console.log(cool())

// hello();
// goodbye();

// require('./custom_goodbye').goodbye();