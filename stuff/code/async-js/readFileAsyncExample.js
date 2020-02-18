const fs = require('fs')

fs.readFile('notes.txt', 'utf8', (_, contentFile) => {
  const numWords = contentFile.split(' ').length
  const numLines = contentFile.split('\n').length
  fs.writeFile('results.txt', JSON.stringify({ numWords, numLines }), () => {
    console.log(`Results written succesfully`)
  })
});

console.log("this goes here...")