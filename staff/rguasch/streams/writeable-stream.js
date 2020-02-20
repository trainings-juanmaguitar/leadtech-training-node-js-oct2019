var fs = require("fs");
var data = '';
var numChunks = 0;

// Create a readable stream
var writeableStream = fs.createWriteStream('output.txt');

// Set the encoding to be utf8.
writeableStream.write(data,'UTF8');

// Handle stream events --> data, end, and error
writeableStream.on('finish', function (chunk) {
    console.log('Writting file...');
});

writeableStream.on('end', function () {
    console.log(data);
});

writeableStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Program Ended");
