var inputs = process.argv.slice(2);
var result = inputs.map((item) => item.charAt(0))
                   .reduce((acc, item) => acc + item);
console.log(result);
