import deepCopy from "./deepCopy";

type Items = {
  string: string;
  number: number;
  array: number[];
  set: Set<number>;
  map: Map<number, number>;
  object: Record<string, string>;
};

describe("transform/deepCopy", () => {
  test("Should copy all values into new references", () => {
    const item = {
      string: "string",
      number: 1,
      array: [1, 2],
      set: new Set([1, 2]),
      map: new Map([[1, 2]]),
      object: { key: "value" },
    };
    const itemCopy = deepCopy(item) as Items;
    expect(itemCopy).toEqual(item);
    expect(itemCopy).not.toBe(item);
    expect(itemCopy.string).toBe(item.string);
    expect(itemCopy.number).toBe(item.number);
    expect(itemCopy.array).not.toBe(item.array);
    expect(itemCopy.array).toEqual(item.array);
    expect(itemCopy.set).not.toBe(item.set);
    expect(itemCopy.set).toEqual(item.set);
    expect(itemCopy.map).not.toBe(item.map);
    expect(itemCopy.map).toEqual(item.map);
    expect(itemCopy.object).not.toBe(item.object);
    expect(itemCopy.object).toEqual(item.object);
  });
});
