function isObject(o) {
  return o === Object(o) && !Array.isArray(o) && typeof o !== 'function';
}
export default isObject;
