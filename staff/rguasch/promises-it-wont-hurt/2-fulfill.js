'use strict';

let fulfill = new Promise(function (resolve, reject) {
    //ASYNCHRONOUS MAGIC HAPPENS
    setTimeout(function () {
        resolve('FULFILLED!')
    }, 300)
});


fulfill.then(console.log);
