// const request = require("request");
const psRequest = require("request-promise")
// function psRequest(myUrl) {
//     return new Promise(function (resolve, reject) {
//       request(myUrl, function (error, response, body) {
//           if (error != null) reject(error);
//           resolve(body);
//       });
//     })
// }

// "firstName": "Carlucia",
// "lastName": "Das neves",

const getFullNameFirstOwner = ({data: [{ owner: { firstName, lastName }}]}) => 
  `${firstName} ${lastName}`

psRequest('https://n161.tech/api/dummyapi/post?limit=20&page=2')
  .then(JSON.parse)
  .then(getFullNameFirstOwner)
  .then(console.log)
  .catch(error => console.log(error.message));

// psRequest('google.es')
//   .then(console.log)
//   .catch(error => console.log(error.message));