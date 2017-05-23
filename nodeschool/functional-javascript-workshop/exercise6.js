var countWords = function (inputWords) {
  return inputWords.reduce(function(acc, elt) {
    acc[elt] = acc[elt] + 1 || 1;
    return acc;
  }, {});
};

module.exports = countWords;
