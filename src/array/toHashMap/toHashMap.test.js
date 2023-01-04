import toHashMap from "./toHashMap";

describe("array/toHashMap", () => {
  const testArray = [
    { id: 1, name: "Jordan" },
    { id: 2, name: "Kowal" },
  ];

  test("All items have the key", () => {
    const hashMap = toHashMap(testArray, "id");
    expect(hashMap).toEqual({
      1: testArray[0],
      2: testArray[1],
    });
  });

  test("Key might be missing", () => {
    const tempArray = [...testArray, { name: "Cat" }, { name: "Dog" }];
    const hashMap = toHashMap(tempArray, "id");
    expect(hashMap).toEqual({
      1: tempArray[0],
      2: tempArray[1],
      undefined: tempArray[3],
    });
  });
});
