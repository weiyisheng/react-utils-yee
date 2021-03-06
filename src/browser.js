const browserUtils = {
  isWeChat: function () {
    return /MicroMessenger/i.test(navigator.userAgent)
  },
  isMobile: {
    Android: function () {
      return /Android/i.test(navigator.userAgent)
    },
    BlackBerry: function () {
      return /BlackBerry/i.test(navigator.userAgent)
    },
    iOS: function () {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent)
    },
    Windows: function () {
      return /IEMobile/i.test(navigator.userAgent)
    },
    any: function () {
      return (this.Android() || this.BlackBerry() || this.iOS() || this.Windows())
    }
  }
}

export default browserUtils
