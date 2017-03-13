"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var elementUtils = {
  cleanUnknownProps: function cleanUnknownProps(props, keys) {
    var oriProps = Object.assign({}, props);
    keys.forEach(function (k) {
      return delete oriProps[k];
    });
    return oriProps;
  }
};

exports["default"] = elementUtils;
module.exports = exports["default"];