'use strict'

const http = require('q-io/http');

var promise = http.read('http://localhost:1337')

function parse(result) {
    return JSON.parse(result)
}

promise
    .then(parse)
    .then(console.log)