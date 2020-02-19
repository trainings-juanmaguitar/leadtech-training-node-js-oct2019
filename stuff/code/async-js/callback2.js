
function executeCallback (fn) {
	try {
		var value = fn()
		return value
	}
	catch(e) {
		console.log(e.message)
	} 
} 

executeCallback()