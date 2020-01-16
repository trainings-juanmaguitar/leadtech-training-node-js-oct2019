'use strict';

/*

Having the "Julianne.OConner@kory.org" mail written in a file called mail.txt
→ get the mail from that file
→ get the user from 'http://jsonplaceholder.typicode.com/users' that have this mail
→ get the posts of that user (using its key) from 'http://jsonplaceholder.typicode.com/posts?userid=2'
→ write in a file the titles of the posts separated by `\n`


 */


const readFilePromise = require('fs-readfile-promise');


