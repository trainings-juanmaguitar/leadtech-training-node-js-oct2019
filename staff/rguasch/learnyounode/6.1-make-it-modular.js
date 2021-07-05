const getFilteredFIlesByExtension = require('./6-mymodule');

const [, , pathToEvaluate, extension] = process.argv;

getFilteredFIlesByExtension(pathToEvaluate, extension, (error, filteredFiles) => {
    if (error) throw error;
    filteredFiles
        .forEach(fileName => console.log(fileName))
})
