const express = require('express')
const app = express()

const [,,PORT = 3001] = process.argv

app.get('/search', (req, res) => {
  const {query} = req
  res.json(query)
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})