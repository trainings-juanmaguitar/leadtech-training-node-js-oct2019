const a = 1
function f() {
  const b = 1
  var name = "juanma"
  function n() {
    const c = 3
  }
}

function greetingsName(name) {
	const greetings = "Hello " + name
	function log() {
		const city = "barcelona"
		console.log(greetings + "from " + city)
	}
	console.log(city)
	log()
}