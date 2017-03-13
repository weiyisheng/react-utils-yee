const elementUtils = {
  cleanUnknownProps: function(props, keys: []) {
    const oriProps = Object.assign({}, props)
    keys.forEach(k => delete oriProps[k])
    return oriProps
  }
}

export default elementUtils
