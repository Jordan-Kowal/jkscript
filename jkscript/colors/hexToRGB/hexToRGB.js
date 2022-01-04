import extractRBGFromHex from "../extractRBGFromHex";

/**
 * Transforms a hex color like `#000000` into a css rbg color like `rgb(0, 0, 0)`
 * @param {String} hexString
 * @returns {String}
 */
export default function hexToRGB(hexString) {
  const { red, green, blue } = extractRBGFromHex(hexString);
  return `rgb(${red}, ${green}, ${blue})`;
}
