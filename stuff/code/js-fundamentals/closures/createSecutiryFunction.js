function createSecurityFunction(password) {
   let pass = password;
   let tries = 0;
   return function(text) {
       ++tries;
       if (tries >= 3) return 'maximum tries reached!!';
       if (pass == text) return 'match!'
       return 'no match, tries left ' + (3-tries);
   }
}