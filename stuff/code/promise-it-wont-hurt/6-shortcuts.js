var promiseResolved = Promise.resolve('Success!')
var promiseRejected = Promise.reject(new Error('Fail!!'))

promiseResolved.then(console.log)
promiseRejected.catch(error => console.log(error.message))
