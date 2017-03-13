


const Validation = {
  notEmptyString: function(str) {
    return str && typeof(str) === 'string' && str.trim().length > 0
  },

  validPhoneNumber: function(str) {
    return Validation.notEmptyString(str) && /^1[3|4|5|7|8][0-9]\d{8}$/.test(str)
  },

  positiveNumber: function(number) {
    return number && typeof(number) === 'number' && number > 0
  }
}

export default Validation
