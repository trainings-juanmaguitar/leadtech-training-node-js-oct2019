function SumOperations (num, op1, op2) {
	return op1(num) + op2(num)
}

function getMultipliedPerFive(num) { return num*5 }
function getMultipliedPerSeven(num) { return num*7 }

function getFive() { return 5 }
function getSeven() { return 7 }

function getDouble(number) { return number * 2 }

SumOperations(6, getFive, getSeven) 
SumOperations(2, getMultipliedPerFive, getMultipliedPerSeven) 
SumOperations(2, num => num*2, num => num*3) 

