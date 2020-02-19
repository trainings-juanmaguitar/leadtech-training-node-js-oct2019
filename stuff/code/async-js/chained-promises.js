const promise1 = Promise.resolve('resolved!')
const promise11 = Promise.resolve('resolved 1.1!')
const promise12 = Promise.resolve('resolved 1.2!')
const promise13 = Promise.resolve('resolved 1.3!')
const promise2 = Promise.reject(new Error('rejected!'))

promise1
  .then(result => {
    console.log(result)
    return promise11
  })
  .then(result => {
    console.log(result)
    return 'something in between...'
  })
  .then(result => {
    console.log(result)
    return promise12
  })
  .then(result => {
    console.log(result)
    return 'something in between...'
  })
  .then(result => {
    console.log(result)
    return promise12
  })
  .then(result => {
    console.log(result)
    return 'something in between...'
  })
  .then(result => {
    console.log(result)
    return promise13
  })
  .then(console.log)
