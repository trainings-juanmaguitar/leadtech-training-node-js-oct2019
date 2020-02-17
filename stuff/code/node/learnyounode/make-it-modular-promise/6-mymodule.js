const fs = require('fs')
const path = require('path');

const psReadDir = pathToRead => 
  new Promise((resolve, reject) => {
    fs.readdir(pathToRead, 'utf8', (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })

async function getFilteredFilesByExtension(pathToRead, extension) {
  const files = await psReadDir(pathToRead)
  const filteredFiles = files.filter( file => path.extname(file) === '.' + extension)
  return filteredFiles
}

module.exports = getFilteredFilesByExtension