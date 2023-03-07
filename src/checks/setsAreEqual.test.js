import setsAreEqual from './setsAreEqual';

describe('utils/objects/setsAreEqual', () => {
  test('Tests setsAreEqual', () => {
    expect(setsAreEqual(new Set([1, 2, 3]), new Set([1, 2, 4]))).toEqual(false);
    expect(setsAreEqual(new Set([1, 2, 3]), new Set([1, 2]))).toEqual(false);
    expect(setsAreEqual(new Set([1, 2, 3]), new Set([3, 2, 1]))).toEqual(true);
  });
});
