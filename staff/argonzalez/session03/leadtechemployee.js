class LeadtechEmployee {
    constructor(name, mail, job, isAdmin) {
        this.name = name
        this.mail = mail
        this.job = job
        this.isAdmin = isAdmin
    }  
    
    sayHi() {
        return "Hi " + this.name
    }

    hasAccess() {
        return this.isAdmin
    }
}

function generateShowSecretCode(password) {
    return function () {
        return this.hasAccess()?password:'*****';
    }
}

const juan = new LeadtechEmployee('Juan', 'juan@leadtech.com', 'Developer', true)
const pedro = new LeadtechEmployee('Pedro', 'pedro@leadtech.com', 'Developer', false)

LeadtechEmployee.prototype.showSecretCode = generateShowSecretCode('12345')

juan.showSecretCode() // 12345
pedro.showSecretCode() // *****
