/**
 * Extracts the RBG values from a hex color string
 * @param {String} hexString A css color in hex format (# is optional)
 * @returns {{red: Number, green: Number, blue: Number}}
 */
export default function extractRBGFromHex(hexString) {
  if (hexString.startsWith("#")) {
    hexString = hexString.substring(1);
  }
  if (hexString.length === 3) {
    hexString = hexString
      .split("")
      .map((letter) => `${letter}${letter}`)
      .join("");
  }
  return {
    red: parseInt(hexString.substring(0, 2), 16),
    green: parseInt(hexString.substring(2, 4), 16),
    blue: parseInt(hexString.substring(4, 6), 16),
  };
}
