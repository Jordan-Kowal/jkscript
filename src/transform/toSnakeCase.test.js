/* eslint-disable camelcase */
import toSnakeCase from "./toSnakeCase";

describe("transform/toSnakeCase", () => {
  const testSet = {
    snakeCase: "snake_case",
    longSnakeCaseWithSeveralWords: "long_snake_case_with_several_words",
  };
  test("Should transform string to snake_case", () => {
    Object.entries(testSet).forEach(([test, expected]) => {
      expect(toSnakeCase(test)).toEqual(expected);
    });
  });
});
