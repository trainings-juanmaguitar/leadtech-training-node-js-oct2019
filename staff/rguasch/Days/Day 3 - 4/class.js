/*
class LeadtechEmployee {}
LeadtechEmployee.prototype.showSecretCode = generateShowSecretCode("wfdfs6")
Create a "class" in javascript to create objects "leadtech employees" w/ the following properties
- name → string
- mail → string
- job → string
- isAdmin → boolean
Add a secret password in the prototype:
	- password:
	-
Add the following methods to be accesible from this objects:
- sayHi()
- hasAccess()
- showSecretCode()


 */
class Person {
    constructor(name, isAdmin, roles) {
        this.name = name;
        this.isAdmin = isAdmin;
        this.roles = roles;
    }

    sayHi() {
        return "Hi " + this.name
    }

    hasAccess() {
        return this.isAdmin || (this.roles.includes('systems') || this.roles.includes('development'))
    }
}

function generateShowSecretCode(password) {
    return function () {
        return this.hasAccess() ? console.log(password) : console.log('NO ACCESS');
    }
}

let admin = new Person('Admin', true, ['CTO', 'CEO']);
let developer = new Person('Developer', false, ['development']);
let adminWithOtherRole = new Person('Devops', true, ['systems', 'devops']);
let junior = new Person('Junior', false, ['junior']);

Person.prototype.showSecretCode = generateShowSecretCode('12345');

admin.showSecretCode(); // NO ACCESS
developer.showSecretCode(); // NO ACCESS
adminWithOtherRole.showSecretCode(); // 12345
junior.showSecretCode(); // NO ACCESS
