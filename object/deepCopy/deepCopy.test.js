import deepCopy from './deepCopy';

describe('utils/objects/deepCopy', () => {
  test('Test deepCopy', () => {
    const item = {
      subKey: [1, 2],
    };
    const itemCopy = deepCopy(item);
    itemCopy.subKey.push(3);
    expect(item.subKey).toEqual([1, 2]);
    expect(itemCopy.subKey).toEqual([1, 2, 3]);
  });
});
