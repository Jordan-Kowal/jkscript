export const setParam = (urlParams, key, value) => {
  if (value) urlParams.set(key, value);
};

export const setBoolParam = (urlParams, key, value) => {
  if (value !== undefined) urlParams.set(key, !!value);
};

export const appendListParams = (urlParams, key, values) => {
  if (!values || values.length === 0) return;
  values.forEach((value) => urlParams.append(key, value));
};
