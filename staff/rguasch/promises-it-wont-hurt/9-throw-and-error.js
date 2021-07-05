'use strict';


let invalidJson = process.argv[2];

function getJson(){
    return Promise.resolve(invalidJson);
}
function parsePromised(json) {
    return new Promise(function (resolve,reject) {
        try {
            const parsedJson = JSON.parse(json);
            resolve(parsedJson);
        } catch (error) {
            reject(error);
        }
    });
}

getJson()
    .then(parsePromised)
    .catch(error => console.log(error.message));
