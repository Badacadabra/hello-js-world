var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return changeHandler.convertToChange(currentBalance);
  },

  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

};
