const fs = require('fs');
const server = require('http').createServer();

// server.on('request', (req, res) => {
//   fs.readFile('./big.file', (err, data) => {
//     if (err) throw err;
//     console.log(`${+ new Date()} Use of memory → ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
//     res.end(data);
//   });
// });

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);