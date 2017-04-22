module.exports = (str, nb = str.length) => {
  let exclam = '!'.repeat(nb);
  return `${str}${exclam}`;
}
