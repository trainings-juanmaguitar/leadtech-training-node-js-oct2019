// function all(promise1, promise2) {
//   var counter = 0
//   return new Promise(function(resolve, reject) {
//     var values = []
//     promise1
//       .then(value => values.push(value))
//       .then(() => {
//         ++counter
//         if (counter >=2) {
//           resolve(values)
//         }
//       })

//     promise2
//       .then(value => values.push(value))
//       .then(() => {
//         ++counter
//         if (counter >=2) {
//           resolve(values)
//         }
//       })
//   })
// }

Promise.all([getPromise1(), getPromise2()])
  .then(console.log)