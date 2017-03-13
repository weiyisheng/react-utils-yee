'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var storageUtils = {

  supports: function supports() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  },

  set: function set(key, value) {
    if (this.supports()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  get: function get(key) {
    if (this.supports()) {
      var value = localStorage.getItem(key);

      try {
        return value ? JSON.parse(value) : null;
      } catch (e) {
        // unrecognized JSON
        return null;
      }
    } else {
      return null;
    }
  }

};

exports['default'] = storageUtils;
module.exports = exports['default'];