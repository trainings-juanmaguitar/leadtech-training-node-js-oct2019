const sum = process.argv
  .slice(2) 
  .map( number => parseInt(number)) 
  .reduce( (acc, number) => acc + number, 0) 

console.log(sum)
