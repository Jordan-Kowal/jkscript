const isFunction = (obj: unknown): boolean =>
  !!obj && typeof obj === "function";

export default isFunction;
