const fs = require('fs')
const path = require('path');
const psReadDir = require('fs-readdir-promise')


const [,,pathToEvaluate, extensionFromCLI] = process.argv

const filterFilesPerExtension = (extension, files) => {
  return files
    .filter( file => path.extname(file) === '.' + extension)
}

const getFilteredFiles = filterFilesPerExtension.bind(null, extensionFromCLI)

function getFilteredLitFiles (pathToRead) {
  psReadDir(pathToRead)
    .then(getFilteredFiles)
    .then(filteredFiles => filteredFiles.forEach(fileName => console.log(fileName)))
    .catch(err => {
      throw err
    })
}

// module.exports = getFilteredLitFiles

getFilteredLitFiles(pathToEvaluate, extension)