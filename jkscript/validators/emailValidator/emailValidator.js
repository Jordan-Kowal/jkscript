const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The value must be an valid email address
 * @param {String} value
 * @returns {boolean|string}
 */
export default function emailValidator(value) {
  value = value || "";
  return EMAIL_REGEX.test(value) || "Please provide a valid email address";
}
