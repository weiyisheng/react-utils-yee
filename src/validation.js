
export function notEmptyString(str) {
  return str && typeof(str) === 'string' && str.trim().length > 0
}

export function validPhoneNumber(str) {
  return notEmptyString(str) && /^1[3|4|5|7|8][0-9]\d{8}$/.test(str)
}

export function positiveNumber(number) {
  return number && typeof(number) === 'number' && number > 0
}
