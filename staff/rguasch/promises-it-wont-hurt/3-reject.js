'use strict';

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error('REJECTED!'))
    }, 300);
});

function onReject(errorMessage) {
    return console.log(errorMessage.message)
}

promise.then('_', onReject);
