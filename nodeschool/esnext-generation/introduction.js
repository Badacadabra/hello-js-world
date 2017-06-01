module.exports = function makeCounter(someObj) {

  var nb = 0,
      ok = false;

  someObj.next = function () {
    nb < 10 ? nb++ : ok = true;
    return { value: nb, done: ok };
  }

}
