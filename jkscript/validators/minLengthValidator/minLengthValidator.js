/**
 * The value must be at least N characters
 * @param {String} value
 * @param {Number} min
 * @returns {boolean|string}
 */
export default function minLengthValidator(value, min) {
  value = value || "";
  return value.trim().length >= min || `Must be more than ${min} characters`;
}
