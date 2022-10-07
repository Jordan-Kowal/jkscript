/* eslint-disable camelcase */
import toCamel from './toCamel';

describe('utils/toCamel', () => {
  const testSet = {
    snake_case: 'snakeCase',
    long_snake_case_with_several_words: 'longSnakeCaseWithSeveralWords',
    'kebab-case': 'kebabCase',
  };
  test('transform string to camel case', () => {
    Object.entries(testSet).forEach(([test, expected]) => {
      expect(toCamel(test)).toEqual(expected);
    });
  });
});
