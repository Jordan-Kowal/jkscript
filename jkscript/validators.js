export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The value must be an valid email address
 * @param {String} value
 * @returns {boolean|string}
 */
export function emailValidator(value) {
  value = value || "";
  return emailRegex.test(value) || "Please provide a valid email address";
}


/**
 * The value cannot exceed N characters
 * @param {String} value
 * @param {Number} max
 * @returns {boolean|string}
 */
export function maxLengthValidator(value, max) {
  value = value || "";
  return value.trim().length <= max || `Must be less than ${max} characters`;
}

/**
 * The value must be at least N characters
 * @param {String} value
 * @param {Number} min
 * @returns {boolean|string}
 */
export function minLengthValidator(value, min) {
  value = value || "";
  return value.trim().length >= min || `Must be more than ${min} characters`;
}

/**
 * The value must be between N and M characters long
 * @param {String} value
 * @param {Number} min
 * @param {Number} max
 * @returns {boolean|string}
 */
export function minMaxLengthValidator(value, min, max) {
  value = value || "";
  const length = value.trim().length;
  return (
    (length >= min && length <= max) ||
    `Must be between ${min} and ${max} characters`
  );
}

/**
 * The value cannot be empty
 * @param {*} value
 * @returns {boolean|string}
 */
export function requiredValidator(value) {
  return !!value || "This field is required";
}
