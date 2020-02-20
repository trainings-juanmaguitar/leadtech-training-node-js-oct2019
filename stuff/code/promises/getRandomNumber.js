function getRandomNumber(callback) {
  setTimeout(
    () => {
      const randomNumber = Math.floor(Math.random()*10)
      callback(randomNumber)
    }, 
    Math.floor(Math.random()*10000)
  )
}

function psGetRandomNumber() {
  return new Promise(resolve => {
    getRandomNumber(resolve)
  }) 
}

async function returnMyData() {
  const o = {
    name: "juanma",
    city: "murcia"
  }
  return o
}

module.exports = {
  getRandomNumber,
  psGetRandomNumber,
  returnMyData
}