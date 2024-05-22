import isMissingOrEmptyObject from "./isMissingOrEmptyObject";

describe("checks/isMissingOrEmptyObject", () => {
  test("Should return true only for actual objects with keys", () => {
    expect(isMissingOrEmptyObject(undefined)).toEqual(true);
    expect(isMissingOrEmptyObject(null)).toEqual(true);
    expect(isMissingOrEmptyObject("")).toEqual(true);
    expect(isMissingOrEmptyObject({})).toEqual(true);
    expect(isMissingOrEmptyObject([])).toEqual(true);
    expect(isMissingOrEmptyObject({ id: 1 })).toEqual(false);
  });
});
