const sum = process.argv
    .slice(2)
    .map(number => Number(number))
    .reduce( (acc, number) => acc + number, 0);

console.log(sum);
