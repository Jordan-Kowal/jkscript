import getNextElement from './getNextElement';

describe('utils/getNextElement', () => {
  test('Array of simple items', () => {
    const array1 = [1, 2, 4.2, 'bonjour'];
    expect(getNextElement(array1, 1)).toEqual(2);
    expect(getNextElement(array1, 2)).toEqual(4.2);
    expect(getNextElement(array1, 4.2)).toEqual('bonjour');
    expect(getNextElement(array1, 'bonjour')).toEqual(1);
    expect(getNextElement(array1, 33)).toEqual(null);
  });

  test('Array of objects', () => {
    const array2 = [
      { id: 1, name: 'Name 1' },
      { id: 2, name: 'Name 2' },
      [1, 2, 3],
    ];
    expect(getNextElement(array2, array2[0])).toEqual(array2[1]);
    expect(getNextElement(array2, array2[1])).toEqual(array2[2]);
    expect(getNextElement(array2, array2[2])).toEqual(array2[0]);
    expect(
      getNextElement(array2, array2[0]) === { id: 1, name: 'Name 1' }
    ).toEqual(false);
    expect(getNextElement(array2, array2[2]) === [1, 2, 3]).toEqual(false);
  });
});
