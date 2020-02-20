// Having the "Julianne.OConner@kory.org" mail written in a file called mail.txt
// → ✅ get the mail from that file
// → ✅ get the user from 'http://jsonplaceholder.typicode.com/users' that have this mail
// → ✅ get the posts of that user (using its key) from 'http://jsonplaceholder.typicode.com/posts?userid=2'
// → write in a file the titles of the posts separated by `\n`

const readFilePromise = require('fs-readfile-promise')
const writeFilePromise = require('fs-writefile-promise')
const psRequest = require("request-promise")
const to = require('await-to-js').default

const urlUsers = 'http://jsonplaceholder.typicode.com/users'
const urlPosts = 'http://jsonplaceholder.typicode.com/posts'
// getMailFromFile()
// 	.then(getUserWithThatMail)
// 	.then(getPostsFromUser)
//  .then(writePostTitles)


const FILE_TO_READ = 'ma__il.txt'
const FILE_TO_WRITE = 'pos__ts.txt'

async function getMailFromFile(fileToRead) {
  const [error, contentFile] = await to(readFilePromise(fileToRead, 'utf8'))
  if (error) throw new Error('something went wrong when reading file')
  return contentFile
}

// function getUserWithThatMail(mail) {
//   return psRequest(urlUsers)
//             .then(JSON.parse)
//             .then(users => {
//               const userWithProperMail = users.filter(user => user.email === mail)[0]
//               const {id} = userWithProperMail
//               return id
//             })
// }

async function getUserWithThatMail(mail) {
  const jsonUsers = await psRequest(urlUsers)
  const oUsers = JSON.parse(jsonUsers)
  const userWithProperMail = oUsers.filter(user => user.email === mail)[0]
  const {id} = userWithProperMail
  return id
}

// function getPostsFromUser(id) {
//     const urlUser = urlPosts + "?userId=" + id
//     return psRequest(urlUser)
//             .then(JSON.parse)
//             .then(posts => posts.map(item => item.title) )
// }

async function getPostsFromUser(id) {
  const urlUser = urlPosts + "?userId=" + id
  const jsonPosts = await psRequest(urlUser)
  const oPosts = JSON.parse(jsonPosts)
  const postsTitles = oPosts.map(item => item.title)
  return postsTitles
}    

// async function writePostTitles(fileToWriteResults, postsTitles) {
//   const titlesInLines = postsTitles.join('\n')
//   await writeFilePromise(fileToWriteResults, titlesInLines)
//   return 'post titles have been written properly ' + fileToWriteResults
//   // writeFilePromise
// }

async function writePostTitles(fileToWriteResults, postsTitles) {
  const titlesInLines = postsTitles.join('\n')
  try {
    await writeFilePromise(fileToWriteResults, titlesInLines)
    return 'post titles have been written properly ' + fileToWriteResults
  }
  catch(e) {
    throw new Error('something went wrong when writing file')
  }

  
  // writeFilePromise
}


// async function getMail() {
//   return "Julianne.OConner@kory.org"
// }

// getMail()

// (async () => {
//   const mail = await getMailFromFile(FILE_TO_READ)
//   const userId = await getUserWithThatMail(mail)
//   const postFromUser  = await getPostsFromUser(mauserIdil)
//   const resultWrite = writePostTitles(FILE_TO_WRITE, postFromUser)
//   console.log(resultWrite)
// })()



// async function getMail() {
//   return "Julianne.OConner@kory.org"
// }

// getMail()

getMailFromFile(FILE_TO_READ)
  .then(getUserWithThatMail)
  .then(getPostsFromUser)
  .then(writePostTitles.bind(null, FILE_TO_WRITE))
  .then(console.log)
  .catch(error => {
    console.log('error captured!')
    console.log(error)
  })

// (async () => {
//   const mail = await getMailFromFile(FILE_TO_READ)
//   const userId = await getUserWithThatMail(mail)
//   const postFromUser  = await getPostsFromUser(mauserIdil)
//   const resultWrite = writePostTitles(FILE_TO_WRITE, postFromUser)
//   console.log(resultWrite)
// })()


// getMailFromFile()
// 	.then(getUserWithThatMail)
// 	.then(getPostsFromUser)
// 	.then(writePostTitles)

