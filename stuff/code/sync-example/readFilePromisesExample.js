const psReadFile = fileToRead => new Promise( function(resolve, reject) {
    fs.readFile(fileToRead, 'utf8', (error, contentFile) => {
      if error reject(error)
      resolve(contentFile)
    }
  })

const psWriteFile = contentToWrite => 
  new Promise(resolve => {
    fs.writeFile('results.txt', contentToWrite, err => {
      if error reject(error)
      resolve(`Results written succesfully`)
    }
  })

const getStatsFile = contentFile => {
    const numWords = contentFile.split(' ')
    const numLines = contentFile.split('\n')
    return JSON.stringify({ numWords, numLines })
  }


psReadFile('notes.txt')
  .then(getStatsFile)
  .then(psWriteFile)
  .then(console.log)