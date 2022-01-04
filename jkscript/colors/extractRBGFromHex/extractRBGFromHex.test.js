import extractRBGFromHex from "./extractRBGFromHex";

describe("colors/extractRBGFromHex", () => {
  test("Converts various values", () => {
    let rgbValue = extractRBGFromHex("#34e0f5");
    expect(rgbValue).toEqual({
      red: 52,
      green: 224,
      blue: 245,
    });
    expect(extractRBGFromHex("34e0f5")).toEqual(rgbValue);

    rgbValue = extractRBGFromHex("#f3d");
    expect(rgbValue).toEqual({
      red: 255,
      green: 51,
      blue: 221,
    });
    expect(extractRBGFromHex("f3d")).toEqual(rgbValue);
  });
});
