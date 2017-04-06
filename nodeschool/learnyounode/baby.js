var args = process.argv,
    filtered = args.slice(2),
    total = 0;

for (var i = 0; i < filtered.length; i++) {
    total += Number(filtered[i]);
}

console.log(total);
