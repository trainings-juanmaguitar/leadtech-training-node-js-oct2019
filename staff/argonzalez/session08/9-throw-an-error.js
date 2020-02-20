'use strict'

var promise = new Promise(function (resolve, reject) {
    try {
        resolve(JSON.parse(process.argv[2]))
    } catch (e) {
        reject(e)
    }
});

function onReject(error) {
    console.log(error.message);
}

promise
    .then(console.log)
    .catch(onReject)