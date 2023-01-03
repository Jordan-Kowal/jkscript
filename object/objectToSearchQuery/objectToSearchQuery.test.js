import objectToSearchQuery from './objectToSearchQuery';

describe('utils/objectToSearchQuery', () => {
  const obj = {
    value1: 3,
    value2: [1, 2],
    value3: 'yes',
    value4: true,
    value5: '', // ignored
    value6: undefined, // ignored
  };

  test('Test objectToSearchQuery', () => {
    expect(objectToSearchQuery(obj)).toEqual(
      'value1=3&value2=1%2C2&value3=yes&value4=true'
    );
  });
});
