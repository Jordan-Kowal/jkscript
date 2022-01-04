/**
 * The value cannot exceed N characters
 * @param {String} value
 * @param {Number} max
 * @returns {boolean|string}
 */
export default function maxLengthValidator(value, max) {
  value = value || "";
  return value.trim().length <= max || `Must be less than ${max} characters`;
}
