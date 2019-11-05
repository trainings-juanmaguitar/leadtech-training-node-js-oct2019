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
