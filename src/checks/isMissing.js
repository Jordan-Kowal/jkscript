export const isMissing = (value) => value === undefined || value === null;

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const isMissingOrEmptyObject = (obj) =>
  isMissing(obj) || isEmptyObject(obj);
