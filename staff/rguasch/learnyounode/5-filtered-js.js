const fs = require('fs')
const path = require('path')

const [,,pathForStats, extension] = process.argv;

fs.readdir(pathForStats, 'utf8',function (error, files) {
    if (error) throw error
    files
        .filter(file => path.extname(file) === '.'+extension)
        .forEach(filename => console.log(filename))
})
