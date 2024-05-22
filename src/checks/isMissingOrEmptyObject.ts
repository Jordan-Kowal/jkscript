const isMissingOrEmptyObject = (obj: any): boolean =>
  obj === undefined || obj === null || Object.keys(obj).length === 0;

export default isMissingOrEmptyObject;
