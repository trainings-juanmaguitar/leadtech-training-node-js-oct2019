var fs = require("fs");
var zlib = require('zlib');

const readableStream = fs.createReadStream('input.txt')
const writableStream = fs.createWriteStream('input.txt.gz')
// Compress the file input.txt to input.txt.gz

readableStream
  // .pipe(zlib.createGzip())
  .pipe(writableStream);
  
console.log("File Compressed.");