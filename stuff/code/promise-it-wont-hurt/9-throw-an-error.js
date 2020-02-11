function promiseGetJson() {
  return Promise.resolve(process.argv[2])
}

function parsePromised(json) {
  return new Promise(function(resolve, reject) {
    try {
      const o = JSON.parse(json)
      resolve(o)
    }
    catch(e) {
      reject(e)
    }
  })
}

promiseGetJson()
    .then(parsePromised)
    .catch(e => console.log(e.message));