const express = require('express')
const app = express()
const PORT = 3001

app.use(express.static('public'))
app.set('view engine', 'pug');
//app.set('views', './views');


app.get('/', (req, res) => {
  const title = 'Hey'
  const message = 'Hello there!'
  res.render('home', { title, message })  
})

app.listen(PORT, () => {
  console.log(`Magic happening in PORT ${PORT}...`)
}) 

