function sayHi(name) {
	return "Hello I'm " + name
} 

const me = {
	name: "juanma",
	greetings: function(greeting = "Bye", city =  "Barcelona") {
		return greeting + " I'm " + this.name + " and I'm from " + city
	} 	
}

me.greetings() // "Bye I'm juanma"
me.greetings.call({ name: "paco"}) // 

me.greetings("Hello") // "Hello I'm juanma"
me.greetings.call({ name: "paco" }, "Hola") // "Hola I'm Paco"
me.greetings.apply({ name: "paco" }, ["Hola"]) // "Hola I'm Paco"

const sayHolaFromPaco = me.greetings.bind({ name: "paco" }, "Hola")
const sayBonjourFromPepe = me.greetings.bind({ name: "pepe" }, "Bonjour")

sayHolaFromPaco()  // "Hola I'm Paco and I'm from Barcelona
sayBonjourFromPepe("Madrid")  // "Bonjour I'm pepe  and I'm from Madrid

IIFE


