/**
 * Extracts the parameters from a URL object and returns them as an object
 * @param {string} urlSearch URL search part to extract the query parameters from
 * @returns {object}
 */
function getParamsFromUrl(urlSearch) {
  const query = new URLSearchParams(urlSearch);
  const activeFilters = {};
  for (const [key, value] of query.entries()) {
    if (key && value) {
      activeFilters[key] = value.split(',');
    }
  }
  return activeFilters;
}

export default getParamsFromUrl;
