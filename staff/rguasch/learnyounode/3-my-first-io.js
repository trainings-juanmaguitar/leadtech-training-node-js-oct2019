const fs = require('fs');
const pathFile = process.argv[2];
const text = fs.readFileSync(pathFile,'utf8')

const numLines = text.split('\n').length - 1
console.log(numLines)
