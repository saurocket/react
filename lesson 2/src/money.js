"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.rus = exports.eu = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
var cash = sponsors.cash,
    eu = sponsors.eu,
    rus = sponsors.rus;
exports.rus = rus;
exports.eu = eu;

function calcCash() {
  for (var _len = arguments.length, everyCash = new Array(_len), _key = 0; _key < _len; _key++) {
    everyCash[_key] = arguments[_key];
  }

  var total = everyCash[1].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, everyCash[0]);
  return total;
}

var money = calcCash(null, cash);
exports.money = money;