const fs = require('fs');
const path = require('path');
const psReadDir = require('fs-readdir-promise');

const [, , pathForStats, extension] = process.argv;


function getFilteredListFiles(pathToRead, extension) {
    psReadDir(pathToRead
        .then(files => {
            const filteredFiles = files
                .filter(file => path.extname(file) === '.' + extension)
                .forEach(filename => console.log(filename))

        })
        .catch(err => {
            throw err
        })
    )
}

//module.exports = getFilteredListFiles;

getFilteredListFiles(pathForStats, extension);
