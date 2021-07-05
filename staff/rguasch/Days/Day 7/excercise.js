'use strict';

/*
Having the "Julianne.OConner@kory.org" mail written in a file called mail.txt
→ get the mail from that file
→ get the user from 'http://jsonplaceholder.typicode.com/users' that have this mail
→ get the posts of that user (using its key) from 'http://jsonplaceholder.typicode.com/posts?userid=2'
→ write in a file the titles of the posts separated by `\n`
 */

const readFilePromise = require('fs-readfile-promise');
const writeFilePromise = require('fs-writefile-promise');
const psRequest = require("request-promise");
const urlUsers = 'http://jsonplaceholder.typicode.com/users';
const postsUrl = 'http://jsonplaceholder.typicode.com/posts?userid=';


const FILE_TO_READ = 'mail.txt';
const FILE_TO_WRITE = 'post.txt';

function getMailFromFile(fileToRead) {
    return readFilePromise(fileToRead, 'utf8')
}

function getUserWithThatMail(mail) {
    return psRequest(urlUsers)
        .then(JSON.parse)
        .then(users => {
            const userWithProperMail = users.filter(user => user.email === mail)[0];
            const [{id}] = userWithProperMail;
            return id;
        })
}

function getPostsFromUser(userId) {
    return psRequest(postsUrl + userId)
        .then(JSON.parse)
        .then(posts => posts.map(item => item.title));
}

function writePostTitles(postsTitles) {
    return writeFilePromise(fileToWritePost, postsTitles.join('\n'));
}

getMailFromFile('mail.txt')
    .then(getUserWithThatMail)
    .then(getPostsFromUser)
    .then(writePostTitles.bind(null, FILE_TO_WRITE))
    .then(() => {
        console.log('Post titles have been written properly in post.txt')
    });
