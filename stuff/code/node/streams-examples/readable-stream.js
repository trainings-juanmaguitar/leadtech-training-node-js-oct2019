var fs = require("fs");
var data = '';
var numChunks = 0;

// Create a readable stream
var readableStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readableStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readableStream.on('data', function(chunk) {
   // console.log(++numChunks);
   data += chunk;
});

readableStream.on('end',function(){
   // console.log(data.length);
   console.log('Read file finished');
   console.log(`Use of memory → ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
});

readableStream.on('error', function(err){
   console.log(err.stack);
});

