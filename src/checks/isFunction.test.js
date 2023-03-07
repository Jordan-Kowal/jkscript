import isFunction from './isFunction';

describe('checks/isFunction', () => {
  test('Should return true for functions', () => {
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

  test('Should return false for non-function objects', () => {
    const testCases = [[], null, undefined, {}, '', /abc/];
    testCases.forEach((test) => {
      expect(isFunction(test)).toBe(false);
    });
  });
});
