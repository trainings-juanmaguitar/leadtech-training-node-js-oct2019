const express = require('express')
const bodyparser = require('body-parser')
const app = express()

const [,,PORT = 3002] = process.argv

app.set('view engine', 'pug');

app.use(bodyparser.urlencoded({extended: false}))

const title = 'My super site'

// /home
app.get('/', (req, res) => {
  const textPage = 'This is the home'
  res.render('home', { title, textPage })
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.post('/contact', (req, res) => {
  const {name, mail, message} = req.body
  const textPage = 'Your data has been received!'
  res.render('confirmation', {name, mail, message, title, textPage})
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})