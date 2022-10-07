import isFunction from './isFunction';

describe('utils/isFunction', () => {
  test('return true for functions', () => {
    const testCases = [
      () => {},
      function testFunc() {},
      class Test {},
      async () => {},
      Math.round,
    ];
    testCases.forEach((test) => {
      expect(isFunction(test)).toBe(true);
    });
  });

  test('return false for non function', () => {
    const testCases = [[], null, undefined, {}, '', /abc/];
    testCases.forEach((test) => {
      expect(isFunction(test)).toBe(false);
    });
  });
});
