function alwaysThrows() {
  return new Error("OH NOES")
}

function iterate(valueInteger) {
  console.log(valueInteger)
  return valueInteger+1
}

function do10Iterations() {
  for (var i=0; i<10; i++)
}

function handleError(e) {
  console.log(e.message)
}

Promise.resolve(1)
  .then(iterate, handleError)
  .then(iterate, handleError)
  .then(iterate, handleError)
  .then(iterate, handleError)
  .then(iterate, handleError)
  .then(alwaysThrows)
  .then(iterate, handleError)
  .then(iterate, handleError)
