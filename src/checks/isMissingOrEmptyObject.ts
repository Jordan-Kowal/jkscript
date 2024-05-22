const isMissingOrEmptyObject = (obj: unknown): boolean =>
  obj === undefined || obj === null || Object.keys(obj).length === 0;

export default isMissingOrEmptyObject;
