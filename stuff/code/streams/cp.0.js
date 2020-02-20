// $ node cp hello-world.txt hello-world-2.txt
// WHAT if file is big (2GB file, $ mkfile 2G big-file)
// $ node cp big-file big-file-2

const fs = require('fs')

const { argv: [, , from, to] } = process

console.log('-- STEP 1 ---')
console.log(`${+ new Date()} Use of memory → ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);

fs.readFile(from, /*'utf8',*/ (error, content) => { // WHAT if file is an image, does 'utf8' have sense? try with skylab-icon.png
    if (error) throw error

    console.log('-- STEP 2 ---')
    console.log(`${+ new Date()} Use of memory → ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);

    fs.writeFile(to, content, error => {
        if (error) throw error
        
        console.log('-- STEP 3 ---')
        console.log(`${+ new Date()} Use of memory → ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
    })
})