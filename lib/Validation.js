'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Validation = {
  notEmptyString: function notEmptyString(str) {
    return str && typeof str === 'string' && str.trim().length > 0;
  },

  validPhoneNumber: function validPhoneNumber(str) {
    return Validation.notEmptyString(str) && /^1[3|4|5|7|8][0-9]\d{8}$/.test(str);
  },

  positiveNumber: function positiveNumber(number) {
    return number && typeof number === 'number' && number > 0;
  }
};

exports['default'] = Validation;
module.exports = exports['default'];