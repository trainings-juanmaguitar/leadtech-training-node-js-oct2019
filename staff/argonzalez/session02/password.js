function createSecurityFunction(password) {
    let pass = password;
    let tries = 0;
    return function(text) {
        ++tries;
        if (tries == 3) {
            tries = 0;
            return 'maximum tries reached!!';
        }
        if (pass == text) {
            tries = 0;
            return 'match!';
        } else {
            return 'no match, tries left ' + (3-tries);
        }
    }
}