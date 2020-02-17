function generateShowSecretCode(password) {
	return () {
		return this.isAdmin ? password : 'NO ACCESS!'
	}
}

var showSecretCode = generateShowSecretCode('12345')
showSecretCode() // 'NO ACCESS!'
var isAdmin = true
showSecretCode() // '12345'

roles → ['systems', 'development']

class Person {
	roles = ['a','b']
	constructor(name, isAdmin) {
		this.name = name
		this.isAdmin = isAdmin
	}

	showSecretCode() {

	}
}

Person.prototype.showSecretCode = generateShowSecretCode('2242')
Person.prototype.showSecretCode = function() { 
	return this.isAdmin ? password : 'NO ACCESS!'
}

Person.roles = ['a','b']

var me = new Person('juanma', true)
var you = new Person('paco', false)

me.showSecretCode() // '2242'
you.showSecretCode() // 'NO ACCESS!'

me.roles // 







