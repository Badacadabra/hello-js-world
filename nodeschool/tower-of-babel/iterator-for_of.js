const max = process.argv[2];

let FizzBuzz = {
  [Symbol.iterator]() {
    let i = 0, value;
    return {
      next() {
        value = '';
        i++;

        if (i % 3 === 0) {
          value = 'Fizz';
        } else if (i % 5 === 0) {
          value = 'Buzz';
        } else if (i % 3 === 0 && i % 5 === 0) {
          value = 'FizzBuzz';
        } else {
          value = String(i);
        }

        if (i > max) {
          return {done: true};
        } else {
          return {done: false, value};
        }
      }
    }
  }
}

for (let n of FizzBuzz) {
  console.log(n);
}
