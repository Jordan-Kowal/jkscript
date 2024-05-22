import toCamelCase from "./toCamelCase";

describe("transform/toCamelCase", () => {
  const testSet = {
    snake_case: "snakeCase",
    long_snake_case_with_several_words: "longSnakeCaseWithSeveralWords",
    "kebab-case": "kebabCase",
  };
  test("Should transform string to camel case", () => {
    Object.entries(testSet).forEach(([test, expected]) => {
      expect(toCamelCase(test)).toEqual(expected);
    });
  });
});
