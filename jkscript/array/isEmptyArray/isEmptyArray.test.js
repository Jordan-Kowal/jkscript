import isEmptyArray from './isEmptyArray';

describe('utils/isEmptyArray', () => {
  test('return false for {}', () => {
    expect(isEmptyArray({})).toBe(false);
  });
  test('return true for []', () => {
    expect(isEmptyArray([])).toBe(true);
  });
  test('return false actual array with values', () => {
    expect(isEmptyArray([1])).toBe(false);
    expect(isEmptyArray([1, 3])).toBe(false);
  });
});
