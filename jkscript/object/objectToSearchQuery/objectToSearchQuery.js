import { isEmptyArray } from '../../array';

/**
 * Converts the key:value of an object into a searchQuery string
 * @param {Object.<string|number, string|number|boolean|Array>} filters
 * @returns {string}
 */
function objectToSearchQuery(filters) {
  const notEmptyFilters = Object.keys(filters).reduce((acc, key) => {
    const value = filters[key];
    if (isEmptyArray(value) || value === '' || value === undefined) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  return new URLSearchParams(notEmptyFilters).toString();
}

export default objectToSearchQuery;
