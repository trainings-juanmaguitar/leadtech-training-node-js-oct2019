// > node statsWords data.txt pupitaa
// 2 times

const fs = require('fs');

const fileToRead = process.argv[2];
const wordToFind = process.argv[3];

console.log('starting statsWords....');
console.log(fileToRead + ':' + wordToFind);

const contentFileSync = fs.readFileSync(fileToRead, 'utf8');
console.log(contentFileSync);

fs.readFile(fileToRead, 'utf8', function (error, contentFile) {
    console.log(contentFile)
});
console.log('hello');


const psReadFile = new Promise(function (resolve, reject) {
    fs.readFile(fileToRead, 'utf8', function (error, contentFile) {
        resolve(contentFile)
    });
});

const psWriteFile = new Promise(function (resolve, reject) {
    fs.writeFile('results.txt', data, 'utf8', function(err){
        if (err) reject(err)
        resolve('Result weitten in results.txt')
    });
});

psReadFile.
then(contentFile => {
    const numberLines = contentFile.split('\n').length;
    const numberWords = contentFile.split(' ').length;
    const stats = {numberLines, numberWords};
    return stats
    })
    .then(console.log);
