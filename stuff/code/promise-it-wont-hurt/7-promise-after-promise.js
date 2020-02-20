// function first() {
//   return Promise.resolve("Hello!")
// }

// function second(value) {
//   // return Promise.resolve(value + "From Barcelona!")
//   return new Promise(function(resolve, reject) {
//     resolve(value + "From Barcelona!")
//   } )
// }


first()
  .then(second)
//  .then(text => text.toUpperCase())
  .then(console.log)