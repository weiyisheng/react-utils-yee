"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var browserUtils = {
  isWeChat: function isWeChat() {
    return (/MicroMessenger/i.test(navigator.userAgent)
    );
  },
  isMobile: {
    Android: function Android() {
      return (/Android/i.test(navigator.userAgent)
      );
    },
    BlackBerry: function BlackBerry() {
      return (/BlackBerry/i.test(navigator.userAgent)
      );
    },
    iOS: function iOS() {
      return (/iPhone|iPad|iPod/i.test(navigator.userAgent)
      );
    },
    Windows: function Windows() {
      return (/IEMobile/i.test(navigator.userAgent)
      );
    },
    any: function any() {
      return this.Android() || this.BlackBerry() || this.iOS() || this.Windows();
    }
  }
};

exports["default"] = browserUtils;
module.exports = exports["default"];