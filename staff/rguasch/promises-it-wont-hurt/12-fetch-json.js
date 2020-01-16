'use strict';

const request = require("request");
const url = 'https://n161.tech/api/dummyapi/post?limit=20&page=2';


function psRequest(myUrl) {
    return new Promise(function (resolve, reject) {
        request(myUrl, function (error, response, body) {
            if (error != null) {
                reject(error);
            }
            resolve(body);
        });
    })
}
/*
psRequest('https://n161.tech/api/dummyapi/post?limit=20&page=2')
    .then(console.log)
    .catch(error => console.log(error.message));
*/

/*
const psRequest = require('request-promise');

function parseResult(data){
    result = JSON.parse(result);
    console.log(result.data[0].owner.firstName + ' ' + result.data[0].owner.lastName)
}

psRequest(url)
    //.then(console.log)
    .then(parseResult);
*/


psRequest('https://n161.tech/api/dummyapi/post?limit=20&page=2')
    .then(result => {
        result = JSON.parse(result);
        console.log(result.data[0].owner.firstName + ' ' + result.data[0].owner.lastName)
    })
    .catch(error => console.log(error.message));
