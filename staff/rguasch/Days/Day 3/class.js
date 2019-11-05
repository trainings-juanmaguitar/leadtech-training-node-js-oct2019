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
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }

    generateShowSecreteCode(password) {
        return (this.isAdmin) ? password : 'NO ACCESS!';
    }

    showSecretCode() {
        console.log(this.generateShowSecreteCode('1234'));
    }
}

let admin = new Person('admin', true);
admin.showSecretCode();

let user = new Person('user', false);
user.showSecretCode();


