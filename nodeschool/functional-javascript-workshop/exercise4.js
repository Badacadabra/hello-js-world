var getShortMessages = function (messages) {
  return messages.filter(function (elt) {
    return elt.message.length < 50;
  })
  .map(function (elt) {
    return elt.message;
  });
}

module.exports = getShortMessages;
