var numbers = process.argv.slice(2),
    nb_str = numbers.toString(),
    min = Math.min(...numbers);

console.log(`The minimum of [${nb_str}] is ${min}`);
