const getParamsFromUrl = (urlSearch) => {
  const query = new URLSearchParams(urlSearch);
  const activeFilters = {};
  for (const [key, value] of query.entries()) {
    if (key && value) {
      activeFilters[key] = value.split(',');
    }
  }
  return activeFilters;
};

export default getParamsFromUrl;
