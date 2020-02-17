const express = require('express')
const bodyparser = require('body-parser')
const app = express()

const [,,PORT=3001] = process.argv

app.use(bodyparser.urlencoded({extended: false}))

// <form><input name="str"/></form>
app.post('/form', (req, res) => {
  const {str} = req.body
  const dataToRespond = str.split('').reverse().join('')
  res.end(dataToRespond)
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})








