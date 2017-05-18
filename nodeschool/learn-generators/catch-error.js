function* upper(arr) {
  for (let i = 0; i < arr.length; i++) {
    let up = null;
    try {
      up = arr[i].toUpperCase();
    } catch (e) {}
    yield up;
  }
}

let bad_items = ['a', 'B', 1, 'c'];

for (let item of upper(bad_items)) {
  console.log(item);
}
