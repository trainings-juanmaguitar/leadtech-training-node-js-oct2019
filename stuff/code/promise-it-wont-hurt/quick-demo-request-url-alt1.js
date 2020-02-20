const request = require("request");
const url = 'https://n161.tech/api/dummyapi/post?limit=20&page=2'

function getJson(){
  return Promise.resolve(url);
}

function requestUrl() {
  return new Promise(function (resolve, reject) {
      resolve(
          request(url, function (error, response, body) {
              console.log('body:', body);
          })
      )
  });
}

requestPromisified(url)
  .then(...)
  
getJson()
  .then(requestUrl)