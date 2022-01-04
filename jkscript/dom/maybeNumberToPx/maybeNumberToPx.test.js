import maybeNumberToPx from "./maybeNumberToPx";

describe("dom/maybeNumberToPx", () => {
  test("Converts various values", () => {
    expect(maybeNumberToPx(3)).toEqual("3px");
    expect(maybeNumberToPx("3")).toEqual("3px");
    expect(maybeNumberToPx("3p")).toEqual("3px");
    expect(maybeNumberToPx("3px")).toEqual("3px");
    expect(maybeNumberToPx("3rem")).toEqual("3rem");
    expect(maybeNumberToPx([])).toEqual([]);
    expect(maybeNumberToPx({})).toEqual({});
  });
});
