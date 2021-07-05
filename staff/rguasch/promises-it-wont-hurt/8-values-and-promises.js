'use strict';

function attachTitle(text) {
    return 'DR. ' + text;
}

let promise = Promise.resolve('MANHATTAN')

promise
    .then(attachTitle)
    .then(console.log);
