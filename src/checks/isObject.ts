const isObject = (o: any): boolean =>
  o === Object(o) && !Array.isArray(o) && typeof o !== "function";

export default isObject;
