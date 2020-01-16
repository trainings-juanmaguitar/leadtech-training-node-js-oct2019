const fs = require('fs')
const path = require('path')

function getFilteredFilesByExtension(pathToRead, extension, callback) {
    fs.readdir(pathToRead, 'utf8', (error, files) => {
        if (error) return callback(error);
        const filteredFiles = files.filter(file => path.extname(file) === '.' + extension);
        callback(null, filteredFiles)
    })
}

module.exports = getFilteredFilesByExtension;
