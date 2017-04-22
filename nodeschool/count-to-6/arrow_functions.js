var inputs = process.argv.slice(2);
var results = inputs.map(x => x.charAt(0)).reduce((acc, x) => `${acc}${x}`);

console.log(`[${inputs.toString()}] becomes "${results}"`);
