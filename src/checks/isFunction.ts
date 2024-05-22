// biome-ignore lint/suspicious/noExplicitAny: Can take anything as a parameter
const isFunction = (obj: any): boolean => !!obj && typeof obj === "function";
export default isFunction;
