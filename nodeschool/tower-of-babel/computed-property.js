let evenOrOdd = +process.argv[2];
let sum = +process.argv[3] + evenOrOdd;

const obj = {
  [evenOrOdd % 2 === 0 ? "even" : "odd"]: evenOrOdd,
  [sum]: sum
};

console.log(obj);
