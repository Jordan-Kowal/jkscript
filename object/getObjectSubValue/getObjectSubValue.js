import { isMissingOrEmptyObject } from '../isMissing';

/**
 * Will follow the path into the object and returns its value
 * If the path does not exist, return undefined
 * @param {Object} obj
 * @param {string} path Looks like "key1.key2.key3"
 * @param {*=} defaultValue Value returned in object is not found
 * @returns {undefined|*}
 */
export default function getObjectSubValue(obj, path, defaultValue) {
  const keys = path.split('.');
  let currentValue = { ...obj };
  for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    if (
      isMissingOrEmptyObject(currentValue) ||
      !Object.prototype.hasOwnProperty.call(currentValue, currentKey)
    ) {
      return defaultValue;
    }
    currentValue = currentValue[currentKey];
  }
  return currentValue;
}
