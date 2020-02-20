'use strict'

var promise = Promise.reject(new Error('Error message'))

promise.catch(error => console.log(error.message))