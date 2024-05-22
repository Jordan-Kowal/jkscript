const isObject = (o: unknown): boolean =>
  o === Object(o) && !Array.isArray(o) && typeof o !== "function";

export default isObject;
