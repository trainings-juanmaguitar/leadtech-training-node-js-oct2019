function createSecurityFunction(myPassword){
    var tries = 0;
    const maxTries = 3;
    return function setOrCheckPasword(password) {
        tries++;
        if (tries >= maxTries) {
            console.log("max tries reached!!!")
        } else {
            if (password === myPassword) {
                console.log("match!");
            } else {
                console.log("no match");
            }
        }
    }
}

var password1 = createSecurityFunction('victor');
password1('cat');
password1('dog');
password1('bird');

var password2 = createSecurityFunction('victor');
password2('cat');
password2('victor');