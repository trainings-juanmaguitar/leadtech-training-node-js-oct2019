const fs = require('fs');
const pathFile = process.argv[2];

fs.readFile(pathFile, 'utf8', (error, text) => {
    if (error) throw error;
    const numLines = text.split('\n').length - 1
    console.log(numLines)
})
