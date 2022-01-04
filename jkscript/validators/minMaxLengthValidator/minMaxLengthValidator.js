/**
 * The value must be between N and M characters long
 * @param {String} value
 * @param {Number} min
 * @param {Number} max
 * @returns {boolean|string}
 */
export default function minMaxLengthValidator(value, min, max) {
  value = value || "";
  const length = value.trim().length;
  return (
    (length >= min && length <= max) ||
    `Must be between ${min} and ${max} characters`
  );
}
