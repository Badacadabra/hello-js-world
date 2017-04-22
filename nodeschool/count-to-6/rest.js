module.exports = (...args) => {
  let sum = 0;
  args.forEach(value => sum += value);
  return sum / args.length;
}
