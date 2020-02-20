// Having the "Julianne.OConner@kory.org" mail written in a file called mail.txt
// → ✅ get the mail from that file
// → ✅ get the user from 'http://jsonplaceholder.typicode.com/users' that have this mail
// → get the posts of that user (using its key) from 'http://jsonplaceholder.typicode.com/posts?userid=2'
// → write in a file the titles of the posts separated by `\n`

const readFilePromise = require('fs-readfile-promise')
const psRequest = require("request-promise")
const urlUsers = 'http://jsonplaceholder.typicode.com/users'
const urlPosts = 'http://jsonplaceholder.typicode.com/posts'
// getMailFromFile()
// 	.then(getUserWithThatMail)
// 	.then(getPostsFromUser)
//  .then(writePostTitles)

function getMailFromFile(fileToRead) {
  return readFilePromise(fileToRead, 'utf8')
}

function getUserWithThatMail(mail) {
  return psRequest(urlUsers)
            .then(JSON.parse)
            .then(users => {
              const userWithProperMail = users.filter(user => user.email === mail)[0]
			  console.log(userWithProperMail)
              const {id} = userWithProperMail
              return id
            })
}

function getPostsFromUser(id) {
    const urlUser = urlPosts + "?userId=" + id
    return psRequest(urlUser)
            .then(JSON.parse)
            .then(posts => posts.map(item => item.title) )
}


getMailFromFile('mail.txt')
  .then(getUserWithThatMail)
  .then(getPostsFromUser)
  .then(console.log)

// getMailFromFile()
// 	.then(getUserWithThatMail)
// 	.then(getPostsFromUser)
// 	.then(writePostTitles)

