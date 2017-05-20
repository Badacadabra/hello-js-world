function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  let it = generator();
  it.next().value.then(console.log);
}

run(function* () {
  yield askFoo();
});
