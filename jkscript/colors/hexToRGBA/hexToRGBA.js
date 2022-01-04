import extractRBGFromHex from "../extractRBGFromHex";

/**
 * Transforms an opacity value and a hex color `#000000` into a css rbg color like `rgba(0, 0, 0, N)`
 * @param {String} hexString
 * @param {Number} opacity The opacity value to apply
 * @returns {String}
 */
export default function hexToRGBA(hexString, opacity = 1) {
  const { red, green, blue } = extractRBGFromHex(hexString);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}
