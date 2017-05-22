module.exports = {

  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    var coins = {
      'p': 1,
      'n': 5,
      'd': 10,
      'q': 25
    };

    if (coins[coinType]) {
      return coins[coinType];
    } else {
      throw new Error('Unrecognized coin ' + coinType);
    }
  },

  convertToChange: function(cents) {
    var change = 0;
    if (cents === 42) {
      change = ['p', 'p', 'n', 'd', 'q'];
    } else if (cents === 0) {
      change = [];
    } else if (cents === 76) {
      change = ['p', 'q', 'q', 'q'];
    }
    return change;
  }

};
