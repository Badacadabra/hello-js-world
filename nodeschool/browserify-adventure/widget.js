var domify = require('domify');

module.exports = function () {
  var elem = domify('<div>Hello <span class="name"></span>!</div>');
  return {
    setName: function (str) {
      elem.querySelector('span').textContent = str;
    },
    appendTo: function (target) {
      target.appendChild(elem);
    }
  };
};
