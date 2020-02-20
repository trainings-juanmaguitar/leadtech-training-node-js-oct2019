'use strict'

function all(promise1, promise2) {
    
    var promise = new Promise(function (resolve, reject) {
        var counter = 0
        var array = [];
            promise1.then(value => {
                array[0] = value
                counter++
                if (counter >= 2) resolve(array)
            })
            promise2.then(value => {
                array[1] = value
                counter++
                if (counter >= 2) resolve(array)
            })
    })
    
    return promise;
}

all(getPromise1(), getPromise2())
    .then(console.log)