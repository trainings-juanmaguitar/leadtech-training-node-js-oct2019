const me = {
	name: 'juanma',
	sayHi: function() {
		return "Hello " + this.name
	}
}

me.sayHi()

function sayBye() {
	return "Bye" + this.username
}

function sayAdios() {
	return "Adios" + this.nombreusuario
}

sayBye()

// ---------------

me.sayBye = sayBye
me.sayBye()

me.sayBye.call({ username: "ana" })

// ---------------

var sayByeJuanma = me.sayBye.bind({ username: "juanma" })
sayByeJuanma()

// 

