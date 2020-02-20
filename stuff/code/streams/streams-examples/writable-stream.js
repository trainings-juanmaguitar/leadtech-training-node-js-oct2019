var fs = require("fs");
var data = 'Simply Easy Learning';

// Create a writable stream
var writableStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writableStream.write(data,'UTF8');

// Mark the end of file
writableStream.end();

// Handle stream events --> finish, and error
writableStream.on('finish', function() {
    console.log("Write completed.");
    console.log(`Use of memory → ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
});

writableStream.on('error', function(err){
   console.log(err.stack);
});

console.log(`Use of memory → ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
console.log("Program Ended");