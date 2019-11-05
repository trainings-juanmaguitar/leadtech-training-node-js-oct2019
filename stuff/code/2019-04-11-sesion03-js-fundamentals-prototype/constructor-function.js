Person → fn

	name
	age

	sayHi()

me → {}
you → {}


function Person(name, age) {
	this.name = name
	this.age = age
}

var me = new Person("paco", 23)
var you = new Person("julian", 34)

Person.prototype.sayHi = function() {
	return "Hola " + this.name
}

me.sayHi() 
you.sayHi()

// --------------------------

class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	sayHi() {
		return "Hola " + this.name
	}
}

var me = new Person("paco", 23)
var you = new Person("julian", 34)

