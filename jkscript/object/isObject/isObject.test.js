import isObject from './isObject';

describe('utils/isObject', () => {
  test('return true for {}', () => {
    expect(isObject({})).toBe(true);
  });
  test('return true for {} with properties', () => {
    const testObject = {
      some: 'property',
      and: 'anoter one',
    };
    expect(isObject(testObject)).toBe(true);
  });
  test('return false for weird javascript "objects"', () => {
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(() => {})).toBe(false);
  });
});
