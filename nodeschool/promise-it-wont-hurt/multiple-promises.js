function all(promise1, promise2) {
  return new Promise((fulfill, reject) => {
    let counter = 0,
        val1 = 0,
        val2 = 0;

    promise1.then((v) => {
      val1 = v;
      counter++;

      if (counter === 2) fulfill([val1, val2]);
    });

    promise2.then((v) => {
      val2 = v;
      counter++;

      if (counter === 2) fulfill([val1, val2]);
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
