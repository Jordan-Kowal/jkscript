/**
 * Maybe converts a value to pixels
 * @param {String|Number} value
 * @return {String}
 */
export default function maybeNumberToPx(value) {
  if (typeof value === "number") {
    value = `${value}px`;
  } else if (typeof value === "string") {
    if (
      !value.endsWith("px") &&
      !value.endsWith("%") &&
      !value.endsWith("rem")
    ) {
      value = `${parseInt(value, 10)}px`;
    }
  }
  return value;
}
