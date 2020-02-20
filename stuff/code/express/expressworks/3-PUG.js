const express = require('express')
const app = express()

const [,, PORT, PATH_VIEWS] = process.argv

app.set('view engine', 'pug')
app.set('views', PATH_VIEWS)

app.get('/home', (req, res) => {
  const date = new Date().toDateString()
  res.render('index', {date})
})

app.listen(PORT)