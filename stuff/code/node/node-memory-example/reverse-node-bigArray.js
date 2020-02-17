let arr = Array(1e6).fill("some string");
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);