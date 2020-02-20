const fs = require('fs')
const pathFile = process.argv[2]

fs.readFile(pathFile, 'utf8',  (err, text) => {
  if (err) throw err;
  const newLines = text.split('\n').length - 1
  console.log(newLines)
})

