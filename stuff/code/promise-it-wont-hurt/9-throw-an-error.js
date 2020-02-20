function getJSON() {
  return Promise.resolve(process.argv[2])
}

function parsePromised(json){
  return new Promise(function(resolve, reject){
      try {
          const o = JSON.parse(json)
          resolve(o)
      } catch(error) {
          reject(error)
      }
  });
}

getJSON()
  .then(parsePromised)
  .catch(error => console.log(error.message));