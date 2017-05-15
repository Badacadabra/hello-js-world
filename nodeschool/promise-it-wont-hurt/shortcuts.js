let promise1 = new Promise((fulfill, reject) => {
  reject(new Error('Oops!'));
});

promise1.catch(err => console.error(err.message));

// ---

let promise2 = Promise.reject(new Error('Oops!'));

promise2.then(null, console.error(err.message));

// ---

let promise3 = Promise.resolve('OK!');

promise3.then(console.log);
