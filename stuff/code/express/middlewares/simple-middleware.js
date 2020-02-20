const express = require('express')
const app = express()

const [,,PORT=3000] = process.argv


app.use((req, res, next) => {
  console.log('Middleware!')
  req.name='juanma'
  next()
})

app.get('/client/:clientId', function (req, res) {
  res.send(`Client ${req.params.clientId}`)
})

app.get('/home', (req, res) => {
  res.end(`Hello ${req.name}`)
})

app.get('/about', (req, res) => {
  res.end('About!')
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)  
})
