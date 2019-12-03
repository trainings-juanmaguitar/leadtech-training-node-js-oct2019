'use strict';

/*
function getRandomBoolean() {
    return Math.random() > 0.5;
}

let promise = new Promise(function (resolve, reject) {
    const randomError = getRandomBoolean();
    if (randomError) {
        reject(new Error('SOM ERROR HERE'));
    }
    resolve('OK')

});

promise
    .then(console.log)
    .catch(error => console.log(error.message));
*/

const promise1 = Promise.resolve('ALL OK');
const promise2 = Promise.reject(new Error('SOME ERROR HERE'));

promise1.then(message => console.log('The promise has returned: ' + message));
promise2.catch(error=> console.log(error.message));
