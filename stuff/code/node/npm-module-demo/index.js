var cool = require('cool-ascii-faces')
var nothing = require('./nothing.js')
var url = require('url');

console.log(nothing.displayText())
console.log(nothing.name)

var myUrl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

function displayStuff() {
  console.log(cool())
  console.log("Hello World!")
}

module.exports = {}
module.exports.name = 'displayStuff'

