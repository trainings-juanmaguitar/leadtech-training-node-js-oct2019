const express = require('express')
const app = express()

const [,,PORT = 3050, STATIC_PATH = 'build'] = process.argv

app.use(express.static(STATIC_PATH))

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})