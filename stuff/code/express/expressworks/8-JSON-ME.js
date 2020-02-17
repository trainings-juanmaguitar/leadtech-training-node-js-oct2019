const express = require('express')
const fs = require('fs')
const app = express()

const [,,PORT = 3001, FILENAME] = process.argv

// app.get('/books', (req, res) => {
//   const data = require(FILENAME)
//   res.json(data)
// })

app.get('/books', (req, res) => {
  const data = require(FILENAME)
  fs.readFile(FILENAME, 'utf-8', (err, jsonContentFile) => {
    if (err) res.end(`${FILENAME} could not be accesed`)
    const parsedObject = JSON.parse(jsonContentFile)
    res.json(parsedObject)
  })
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})