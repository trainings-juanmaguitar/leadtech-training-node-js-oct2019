
const getFilteredFilesByExtension = require('./6-mymodule')

const [,,pathToEvaluate, extension] = process.argv;

(async function () {
  const filteredFilesByExtension  = await getFilteredFilesByExtension(pathToEvaluate, extension)
  filteredFilesByExtension.forEach(fileName => console.log(fileName))
})()
