/**
 * The value cannot be empty
 * @param {*} value
 * @returns {boolean|string}
 */
export default function requiredValidator(value) {
  return !!value || "This field is required";
}
