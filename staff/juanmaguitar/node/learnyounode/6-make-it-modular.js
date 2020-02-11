
const getFilteredFilesByExtension = require('./6-mymodule')

const [,,pathToEvaluate, extension] = process.argv
getFilteredFilesByExtension(pathToEvaluate, extension, (err, filteredFiles) => {
  if (err) throw err
  filteredFiles
    .forEach(fileName => console.log(fileName))
})