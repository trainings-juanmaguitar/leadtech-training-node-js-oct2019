function createHowManyExecutionsFunction() {
	var counter = 0
	return function() {
		return ++counter;		
	}
}

const myFunctionCounter = createHowManyExecutionsFunction()
  → function myFunctionCounter() { return ++counter; }

myFunctionCounter() // 1
myFunctionCounter() // 2
myFunctionCounter() // 3
