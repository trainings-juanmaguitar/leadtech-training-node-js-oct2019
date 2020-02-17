const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

const [,,PORT=3000] = process.argv

function middlewareStatic(staticPath='.') {
	return (req, res, next) => {

    const fileName = req.path.split('/').pop()
    const extension = fileName.split('.').pop()
    console.log({fileName, extension})
    if (['css', 'js', 'html'].includes(extension)) {
      const pathFile = path.join(staticPath, fileName)
      fs.access(pathFile, fs.F_OK, (err) => {
        if (err) res.status(404).end('Static Asset not found') 
        
        fs.readFile(pathFile, 'utf8', (err, contentFile) => {
          if (err) res.status(500).end('Error readinf file') 
          res.end(contentFile)
        })
        //file exists
      })
    }

 	}
} 




app.use(middlewareStatic())

// app.get('/client/:clientId', function (req, res) {
//   res.send(`Client ${req.params.clientId}`)
// })

// app.get('/home', (req, res) => {
//   res.end(`Hello ${req.name}`)
// })

// app.get('/about', (req, res) => {
//   res.end('About!')
// })

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)  
})
