import { isMissing, isEmptyObject, isMissingOrEmptyObject } from './isMissing';

describe('utils/isMissing', () => {
  test('isMissing', () => {
    expect(isMissing(undefined)).toEqual(true);
    expect(isMissing(null)).toEqual(true);
    expect(isMissing('')).toEqual(false);
    expect(isMissing({})).toEqual(false);
    expect(isMissing([])).toEqual(false);
  });

  test('isEmptyObject', () => {
    expect(isEmptyObject({})).toEqual(true);
    expect(isEmptyObject({ id: 1 })).toEqual(false);
  });

  test('isMissingOrEmptyObject', () => {
    expect(isMissingOrEmptyObject(undefined)).toEqual(true);
    expect(isMissingOrEmptyObject(null)).toEqual(true);
    expect(isMissingOrEmptyObject('')).toEqual(true);
    expect(isMissingOrEmptyObject({})).toEqual(true);
    expect(isMissingOrEmptyObject([])).toEqual(true);
    expect(isMissingOrEmptyObject({ id: 1 })).toEqual(false);
  });
});
