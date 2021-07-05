'use strict';

function all(promise1, promise2) {
    var counter = 0;
    return new Promise(function (resolve, reject) {
        var values = [];
        promise1
            .then(value => values[0] = value)
            .then(() => {
                counter++;
                if (counter >= 2) {
                    resolve(values)
                }
            });
        promise2
            .then(value => values[1] = value)
            .then(() => {
                counter++;
                if (counter >= 2) {
                    resolve(values)
                }
            });
    })
}

all(getPromise1(), getPromise2())
    .then(console.log)
