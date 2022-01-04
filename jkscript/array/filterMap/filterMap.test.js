import filterMap from "./filterMap";

describe("array/filterMap", () => {
  const testArray = [1, "two", 3, "four", "five"];

  test("No function", () => {
    const identicalArray = filterMap([...testArray], (value) => {
      return [true, value];
    });
    expect(identicalArray).toEqual(testArray);
  });

  test("Normal behavior", () => {
    const filteredArray = filterMap([...testArray], (value, index) => {
      if (index % 2) {
        return [true, value];
      }
      return false;
    });
    expect(filteredArray).toEqual(["two", "four"]);
  });

  test("Invalid return", () => {
    expect(() => filterMap([...testArray], () => {})).toThrow();
  });
});
