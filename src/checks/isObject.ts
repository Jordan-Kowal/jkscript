// biome-ignore lint/suspicious/noExplicitAny: Can take anything as a parameter
const isObject = (o: any): boolean =>
  o === Object(o) && !Array.isArray(o) && typeof o !== "function";

export default isObject;
