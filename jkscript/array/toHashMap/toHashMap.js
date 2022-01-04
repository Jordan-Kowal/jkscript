/**
 * Creates a hashmap from an array of objects using the provided key
 * @param {Array} arr
 * @param {String} key The key used to extract the unique value from our objects
 * @return {Object}
 */
export default function toHashMap(arr, key) {
  return arr.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
}
