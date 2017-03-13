"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberUtils = {
  stringToFloat: function stringToFloat(value) {
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
  }
};

exports["default"] = numberUtils;
module.exports = exports["default"];