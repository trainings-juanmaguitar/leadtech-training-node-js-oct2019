'use strict';

let promise = new Promise(function (resolve, reject) {
    resolve('PROMISE VALUE');
});

console.log('MAIN PROGRAM');

promise.then(console.log);
