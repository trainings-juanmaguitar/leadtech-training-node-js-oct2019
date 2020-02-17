const fs = require('fs')
const path = require('path');

function getFilteredFilesByExtension(pathToRead, extension, callback) {

  fs.readdir(pathToRead, 'utf8', (err, files) => {
    if (err) return callback(err)
    const filteredFiles = files
      .filter( file => path.extname(file) === '.' + extension)
    callback(null, filteredFiles)
  })
}

module.exports = getFilteredFilesByExtension