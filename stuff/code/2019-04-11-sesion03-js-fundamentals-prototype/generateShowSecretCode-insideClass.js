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