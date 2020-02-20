var fs = require("fs");

fs.readFile('input.txt', 'utf-8', (err, data) => {
  console.log('Read file finished');
  console.log(`Use of memory → ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
})