'use strict';

let promise = new Promise(function (resolve, reject) {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onReject(errorMessage) {
    return console.log(errorMessage.message)
}

promise.then(console.log, onReject);
