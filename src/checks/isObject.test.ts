import isObject from "./isObject";

describe("checks/isObject", () => {
  test("Should return true for {}", () => {
    expect(isObject({})).toBe(true);
  });
  test("Should return true for {} with properties", () => {
    const testObject = {
      some: "property",
      and: "another one",
    };
    expect(isObject(testObject)).toBe(true);
  });
  test('Should return false for weird javascript "objects"', () => {
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(() => {})).toBe(false);
  });
});
