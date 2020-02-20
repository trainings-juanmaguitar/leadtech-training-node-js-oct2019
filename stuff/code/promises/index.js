const helpers = require('./getRandomNumber')
const {psGetRandomNumber, returnMyData} = helpers

console.log('BEFORE')

const displayRandomNumber = randomNumber => {
  console.log(`Random Number is ${randomNumber}`)
}

/* WAY 1 - promise */
psGetRandomNumber()
  .then(displayRandomNumber);


/* WAY 2 - asyn-await*/
(async () => {
  const randomNumber = await psGetRandomNumber()
  displayRandomNumber(randomNumber)
  const myData = await returnMyData()
  console.log(myData)
})()

// IIFE


// getRandomNumber()

console.log('AFTER')