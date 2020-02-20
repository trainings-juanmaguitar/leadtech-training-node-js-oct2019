'use strict'

const fileToRead = process.argv[2]
const wordToFind = process.argv[3]
const fs = require('fs');

console.log(fileToRead + ':' + wordToFind)

function countNumberLines(contentFile) {
    return contentFile.split('\n').length
}

const psReadFile = new Promise(function(resolve, reject) {
    fs.readFile(fileToRead, 'UTF-8', function(err, contentFile) {
        resolve(contentFile)
        reject(err)
    })
})

const psWriteFile = data => new Promise(function(resolve, reject) {
    fs.writeFile('results.txt', data, 'UTF-8', function(err) {
        if (err) reject(err)
        resolve('Results written properly in results.txt')
    })
})

psReadFile
    .then(countNumberLines)
    .then(count => psWriteFile(count).then(console.log))
    .catch(console.log(error => console.log(error.message)))