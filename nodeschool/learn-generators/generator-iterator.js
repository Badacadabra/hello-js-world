function* factorial(n) {
  var tmp = 1;
  for (var i = 1; i <= n; i++) {
    tmp *= i;
    yield tmp;
  }
}

for (var n of factorial(5)) {
  console.log(n);
}
