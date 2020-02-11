// $ node cp big-file big-file-2

const fs = require('fs')

const { argv: [, , from, to] } = process

console.log(process.memoryUsage())

const rs = fs.createReadStream(from)
const ws = fs.createWriteStream(to)

rs.on('data', chunk => ws.write(chunk))

rs.on('end', () => console.log(`${+ new Date()} Use of memory → ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`))