class Person {
    constructor(name, isAdmin, roles) {
        this.name = name
        this.isAdmin = isAdmin
        this.roles = roles
    }  
    
    sayHi() {
        return "Hi " + this.name
    }

    hasAccess() {
        return this.isAdmin && (this.roles.includes('systems') || this.roles.includes('development'))
    }
}

function generateShowSecretCode(password) {
    return function () {
        return this.hasAccess()?password:'*****';
    }
}

var juan = new Person('Juan', true, ['manager', 'director'])
var pedro = new Person('Pedro', false, ['systems'])
var alberto = new Person('Alberto', true, ['systems'])

Person.prototype.showSecretCode = generateShowSecretCode('12345')

juan.showSecretCode() // *****
pedro.showSecretCode() // *****
alberto.showSecretCode() // 12345
