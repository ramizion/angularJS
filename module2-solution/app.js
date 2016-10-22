(function () {
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.removeItem = function (itemIdex){
    ShoppingListCheckOffService.addItemToBoughtArray(itemIdex);
  };
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyArray=[
    {
      name: "Beer Bottles",
      quantity:6
    },
    {
      name: "kilo of tomatoes",
      quantity:1
    },
    {
      name: "bread",
      quantity:2
    },
    {
      name: "fish",
      quantity:4
    },
    {
      name: "cookies",
      quantity: 10
    }
  ];
  var boughtArray=[];

  service.addItemToBoughtArray = function (itemIdex){
    var item = toBuyArray[itemIdex];
    boughtArray.push(item);
    toBuyArray.splice(itemIdex, 1);
  };

  service.getBoughtItems = function (){
    return boughtArray;
  }

  service.getToBuyItems = function (){
    return toBuyArray;
  }
}

})();
