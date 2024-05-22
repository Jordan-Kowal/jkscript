/**
 * Applies both `filter` and `map` to the current array and returns the resulting array
 * The `callbackFn` must return either:
 *    false: to discard the element
 *    [true, newValue]: to keep and update the value
 */
const filterMap = (arr: Array<any>, callbackFn: CallableFunction) =>
  arr.reduce((acc, value, index, array) => {
    const result = callbackFn(value, index, array);
    if (result === false) return acc;
    if (Array.isArray(result) && result.length === 2 && result[0] === true) {
      const newValue = result[1];
      acc.push(newValue);
      return acc;
    }
    throw Error("callbackFn must return `false` or `[true, newValue]`");
  }, []);

export default filterMap;
