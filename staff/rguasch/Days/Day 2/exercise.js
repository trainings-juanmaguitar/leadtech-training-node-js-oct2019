//create a function that takes a password:
// and set it to a private variable
// returns a function that will give you 3 tries to match the password


// function createSecurityFunction(password){...}
//
// var myFunction = createSecurityFunction('juanma');
// myFunction('cat');//not match
// myFunction('dog');//not match
// myFunction('elephant');//maximum tries reached
//
// myFunction('dog');//not match
// myFunction('juanma');//match!

function createSecurityPassword(originalPassword) {
    let correctPassword = originalPassword;
    let tries = 0;
    return function (password) {
        ++tries;
        if (password === correctPassword) {
            console.log('match');
        } else {
            if (3 === tries) {
                console.log('maximum tries reached');
            } else {
                console.log('not match');
            }
        }
    }
}

let myFunction = createSecurityPassword('juanma');
myFunction('dog');
myFunction('elephant');
myFunction('juanma');
