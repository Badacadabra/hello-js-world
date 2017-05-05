const max = process.argv[2];

let FizzBuzz = {};

FizzBuzz[Symbol.iterator] = function* () {
  for (let i = 1; i <= max; i++) {
    if (i % 3 === 0 & i % 5 === 0) {
      yield 'FizzBuzz';
    } else if (i % 3 === 0) {
      yield 'Fizz';
    } else if (i % 5 === 0) {
      yield 'Buzz';
    } else {
      yield String(i);
    }
  }
}

for (let n of FizzBuzz) {
  console.log(n);
}
