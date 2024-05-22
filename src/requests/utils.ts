export const setParam = (
  urlParams: URLSearchParams,
  key: string,
  value: string | null | undefined,
) => {
  if (value) urlParams.set(key, value);
};

export const setBoolParam = (
  urlParams: URLSearchParams,
  key: string,
  value: any,
) => {
  if (value !== undefined) urlParams.set(key, `${!!value}`);
};

export const appendListParams = (
  urlParams: URLSearchParams,
  key: string,
  values: string[] | undefined,
) => {
  if (!values || values.length === 0) return;
  values.forEach((value) => urlParams.append(key, value));
};
