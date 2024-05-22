import filterMap from "./filterMap";

describe("transform/filterMap", () => {
  const testArray = [1, "two", 3, "four", "five"];

  test("Should crash if no callback function", () => {
    const identicalArray = filterMap(
      [...testArray],
      (value: string | number) => [true, value],
    );
    expect(identicalArray).toEqual(testArray);
  });

  test("Should correctly filter and map an array", () => {
    const filteredArray = filterMap(
      [...testArray],
      (value: string | number, index: number) => {
        if (index % 2) {
          return [true, value];
        }
        return false;
      },
    );
    expect(filteredArray).toEqual(["two", "four"]);
  });

  test("Should crash if the callback fn signature is invalid", () => {
    expect(() => filterMap([...testArray], () => {})).toThrow();
  });
});
