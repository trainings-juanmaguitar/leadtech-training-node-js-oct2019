function alwaysThrows() {
  return new Error("OH NOES")
}

function iterate(valueInteger) {
  console.log(valueInteger)
  return valueInteger+1
}

Promise.resolve(1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows, e => console.log(e.message))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch()
