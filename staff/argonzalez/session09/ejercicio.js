'use strict'

const  psRequest = require("request-promise");
const readFilePromise = require('fs-readfile-promise')
const writeFilePromise = require('fs-writefile-promise')

const fileToRead = "mail.txt"
const fileToWrite = "postTitles.txt"
const urlUsers = 'http://jsonplaceholder.typicode.com/users'
const urlPosts = 'http://jsonplaceholder.typicode.com/posts'

function getMailFromFile() {
    return readFilePromise(fileToRead, 'utf8')
}

function getUserWithThatMail(mail) {
    return psRequest(urlUsers)
            .then(JSON.parse)
            .then(users => {
              const userWithProperMail = users.filter(user => user.email === mail)[0]
              const {id} = userWithProperMail
              return id
            })
}

function getPostsFromUser(id) {
    const urlUser = urlPosts + "?userId=" + id
    return psRequest(urlUser)
            .then(JSON.parse)
}

function writePostTitles(posts) {
    var postsTitle = ''
    posts.forEach(post => {
        const {title} = post
        postsTitle += title + '\n'
    });
    return writeFilePromise(fileToWrite, postsTitle)
}

getMailFromFile()
    .then(getUserWithThatMail)
    .then(getPostsFromUser)
	.then(writePostTitles)