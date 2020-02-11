function attachTitle(value) {
  return 'DR. ' + value
}

const promise = Promise.resolve('MANHATTAN')

promise
  .then(attachTitle)
  .then(console.log)