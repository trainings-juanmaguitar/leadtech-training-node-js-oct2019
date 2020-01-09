const fs = require('fs')

const contentFile = fs.readFileSync('notes.txt', 'utf8')
console.log('contentFile read...')
const numWords = contentFile.split(' ').length
const numLines = contentFile.split('\n').length
fs.writeFileSync('notes-stat.txt', JSON.stringify({ numWords, numLines }))
console.log('contentFile written...')
console.log(`Results written succesfully`)