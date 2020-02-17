const url = require('url')

const myURL = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
const parsedUrl = url.parse(myURL);


console.log(parsedUrl)
