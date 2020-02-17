const psReadFile = fileToRead => 
  new Promise( resolve => {
    fs.readFile(fileToRead, (_, contentFile) => {
      resolve(contentFile)
    }
  })

const psWriteFile = contentToWrite => 
  new Promise(resolve => {
    fs.writeFile('results.txt', contentToWrite, err => {
      resolve(`Results written succesfully`)
    }
  })

psReadFile('notes.txt')
  .then(contentFile => {
    const numWords = contentFile.split(' ')
    const numLines = contentFile.split('\n')
    return JSON.stringify({ numWords, numLines })
  })
  .then(psWriteFile)
  .then(console.log)

  