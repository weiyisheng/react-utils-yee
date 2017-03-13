
const numberUtils = {
  stringToFloat: function(value) {
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value)
  }
}

export default numberUtils
