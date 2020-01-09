function getRandomBoolean() {
	return Math.random() > 0.5
}

// var promise1 = new Promise(function(resolve, reject) {
// 	resolve('👍')
// })

var promise1 = Promise.resolve('👍')

// var promise2 = new Promise(function(resolve, reject) {
// 	reject('😔')
// })

var promise2 = Promise.reject('😔')


promise1
	.resolve(console.log)

promise2
	.catch(error => console.log(error.message))

