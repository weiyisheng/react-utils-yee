const storageUtils = {

  supports() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  },

  set(key, value) {
    if(this.supports()) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  },

  get(key) {
    if(this.supports()){
      const value = localStorage.getItem(key)

      try {
        return (value) ? JSON.parse(value) : null
      } catch (e) {
        // unrecognized JSON
        return null
      }

    } else {
      return null
    }
  }

}

export default storageUtils
