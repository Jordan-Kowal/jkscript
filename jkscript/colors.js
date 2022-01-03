/**
 * Extracts the RBG values from a hex color string
 * @param {String} hexString A css color in hex format (# is optional)
 * @returns {{red: Number, green: Number, blue: Number}}
 */
export function extractRBGFromHex(hexString) {
  if (hexString.startsWith("#")) {
    hexString = hexString.substring(1);
  }
  const increment = hexString.length === 3 ? 1 : 2;
  return {
    red: parseInt(hexString.substring(0, increment), 16),
    green: parseInt(hexString.substring(increment, increment * 2), 16),
    blue: parseInt(hexString.substring(increment * 2, increment * 3), 16),
  };
}

/**
 * Transforms a hex color like `#000000` into a css rbg color like `rgb(0, 0, 0)`
 * @param {String} hexString
 * @returns {String}
 */
export function hexToRGB(hexString) {
  const { red, green, blue } = extractRBGFromHex(hexString);
  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * Transforms an opacity value and a hex color `#000000` into a css rbg color like `rgba(0, 0, 0, N)`
 * @param {String} hexString
 * @param {Number} opacity The opacity value to apply
 * @returns {String}
 */
export function hexToRGBA(hexString, opacity = 1) {
  const { red, green, blue } = extractRBGFromHex(hexString);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}
