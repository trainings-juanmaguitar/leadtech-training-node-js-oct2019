const express = require('express')
const crypto = require('crypto')
const app = express()

const [,,PORT = 3001] = process.argv

app.put('/message/:id', (req, res) => {
  const {id} = req.params
  const hash = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.end(hash)
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})