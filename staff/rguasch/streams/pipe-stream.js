var fs = require("fs");
var zlib = require('zlib');
var data = '';
var numChunks = 0;

// Create a readable stream
const redeableStream = fs.createReadStream('input.txt');
const writeableStream = fs.createWriteStream('output.txt.gz');

redeableStream
    .pipe(writeableStream);
