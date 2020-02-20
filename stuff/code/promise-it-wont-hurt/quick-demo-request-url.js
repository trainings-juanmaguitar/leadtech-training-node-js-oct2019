const request = require("request");
const url = 'https://n161.tech/api/dummyapi/post?limit=20&page=2'

request(url, function (error, response, body) {
  console.log('body:', body); // Print the HTML for the Google homepage.
});