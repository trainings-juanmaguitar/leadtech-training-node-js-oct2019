var fs = require("fs");
var data = '';
var numChunks = 0;

// Create a readable stream
var readableStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8.
readableStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readableStream.on('data', function (chunk) {
    console.log(++numChunks);
    data += chunk;
});

readableStream.on('end', function () {
    console.log(data);
});

readableStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Program Ended");
