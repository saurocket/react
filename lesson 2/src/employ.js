"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = employers.filter(function (elem) {
  return elem.length > 0;
}).map(function (elem) {
  return elem.toLowerCase().trim();
});
exports.employersNames = employersNames;