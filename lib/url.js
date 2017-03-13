'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var urlUtils = {
  getQuery: function getQuery(url) {
    var query = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      var hash = hashes[i].split('=');
      query[hash[0]] = hash[1];
    }
    return query;
  },
  getStoreId: function getStoreId() {
    return this.getQuery(window.location.href).storeId;
  }
};

exports['default'] = urlUtils;
module.exports = exports['default'];