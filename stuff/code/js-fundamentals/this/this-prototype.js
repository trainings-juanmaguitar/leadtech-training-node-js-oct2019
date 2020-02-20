class Person {
	constructor(name, city) {
		this.name = name
		this.city = city
	}

	sayHi() {
		return "Hi, I'm " + this.name
	}
}

function Person() {
	this.name = name
	this.city = city
}
Person.prototype.sayHi() { return "Hi, I'm " + this.name }

const juanma = new Person('juanma', 'barcelona')
juanma.sayHi()

const paco = new Person('paco', 'barcelona')
paco.sayHi()

function sayBye() { return "Bye " + this.name }
juanma.sayBye = sayBye

Person.prototype.sayBye = sayBye.bind({ name: 'Person'})

juanma.sayBye() // Bye juanma
paco.sayBye() // Bye Person

// juanma
{
	name
	city			→ 		protoype Person   	→ 	{ sayBye }
	sayBye
}

// paco
{
	name			→ 		protoype Person   	→ 	{ sayBye }
	city
}


Person.prototype.sayBye = sayBye.bind({ name: 'Person'})







