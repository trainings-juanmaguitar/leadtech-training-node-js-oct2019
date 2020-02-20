const  request = require("request");
const url = 'https://n161.tech/api/dummyapi/post?limit=20&page=2'

var promise = new Promise(function(resolve, rejec) {
    request(url, function (error, response, body) {
        if (error) rejec(new Error(error))
        resolve(body)
    }
)});

function getData(response) {
    const {data: [{owner: {firstName, lastName}}]} = response
    return `${firstName} ${lastName}`
}

promise
    .then(JSON.parse)
    .then(getData)
    .then(console.log)
    .catch(error => console.log(error.message))