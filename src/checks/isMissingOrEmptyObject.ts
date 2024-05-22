// biome-ignore lint/suspicious/noExplicitAny: Can take anything as a parameter
const isMissingOrEmptyObject = (obj: any): boolean =>
  obj === undefined || obj === null || Object.keys(obj).length === 0;

export default isMissingOrEmptyObject;
