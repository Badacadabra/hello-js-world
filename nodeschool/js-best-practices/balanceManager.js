var balance = 0;

module.exports = {

  canAfford: function (amount) {
    var errorMessage = '';
    if (!this.isValidAmount (amount)) {
      errorMessage = 'Invalid Input';
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },

  increaseBalance: function (amount) {
    balance += amount;
  },

  decreaseBalance: function (amount) {
    var errorMessage = '';
    if(!this.canAfford (amount)) {
      errorMessage = 'Insufficient balance';
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    balance -= amount;
  },

  getBalance: function () {
    return balance;
  },

  isValidAmount: function (amount) {
    return !!amount;
  }

};
