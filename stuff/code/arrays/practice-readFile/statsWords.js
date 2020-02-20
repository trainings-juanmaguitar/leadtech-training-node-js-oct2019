// > node statsWords data.txt pupitaa
// 2 times

const fs = require('fs')
const psReadFile = require('fs-readfile-promise')
const psWriteFile = require('fs-writefile-promise')
const fileToRead = process.argv[2]
const wordToFind = process.argv[3]

console.log('currently executing statsWords..')
console.log(fileToRead + ':' + wordToFind)

// const contentFile = fs.readFileSync(fileToRead, 'utf8');
// console.log(contentFile)
// console.log('hello!')

// const psReadFile = fileToRead => new Promise(function(resolve, reject) {
//   fs.readFile(fileToRead, 'utf8', function(err, contentFile) {
//     resolve(contentFile)
//   });
// })

// const psWriteFile = data => new Promise(function(resolve, reject) {
//   fs.writeFile('results.txt', data, 'utf8', function(err) {
//     if (err) reject(err)
//     resolve('Results written properly in results.txt')
//   })
// })

psReadFile('data.txt', 'utf8')
  .then(contentFile => {
    console.log(contentFile)
    const numberLines = contentFile.split('\n').length
    const numberWords = contentFile.split(' ').length
    const stats = {numberLines, numberWords}
    return stats
  })
  .then(data => JSON.stringify(data))
  .then(constentToWrite => psWriteFile('results.txt', constentToWrite))
  .then(console.log)



console.log('hello!')
