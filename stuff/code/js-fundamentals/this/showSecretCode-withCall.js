function generateShowSecreteCode(password) {
        return (this.isAdmin) ? password : 'NO ACCESS!';
    }

class Person {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
    
    showSecretCode() {
        console.log(generateShowSecreteCode.call(this,'1234'));
    }
}

let admin = new Person('admin', true);
admin.showSecretCode(); // 
let user = new Person('user', false);
user.showSecretCode();