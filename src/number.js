
export function stringToFloat(value) {
  return isNaN(parseFloat(value)) ? 0 : parseFloat(value)
}
