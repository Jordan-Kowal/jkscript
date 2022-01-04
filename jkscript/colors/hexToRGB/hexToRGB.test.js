import hexToRGB from "./hexToRGB";

describe("colors/hexToRGB", () => {
  test("Converts various values", () => {
    let rgbString = hexToRGB("#34e0f5");
    expect(rgbString).toEqual("rgb(52, 224, 245)");
    expect(hexToRGB("34e0f5")).toEqual(rgbString);

    rgbString = hexToRGB("#f3d");
    expect(rgbString).toEqual("rgb(255, 51, 221)");
    expect(hexToRGB("f3d")).toEqual(rgbString);
  });
});
