const http = require('http');
const server = http.createServer();
 
server.on("request", function (req, res) {
    console.log("ecooo")
    console.log(req)
    res.end("this is the response");
});
 
server.listen(3000);