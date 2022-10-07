/* eslint-disable camelcase */
import camelToSnakeCase from './camelToSnakeCase';

describe('utils/camelToSnakeCase', () => {
  const testSet = {
    snakeCase: 'snake_case',
    longSnakeCaseWithSeveralWords: 'long_snake_case_with_several_words',
  };
  test('transform string to snake_case', () => {
    Object.entries(testSet).forEach(([test, expected]) => {
      expect(camelToSnakeCase(test)).toEqual(expected);
    });
  });
});
