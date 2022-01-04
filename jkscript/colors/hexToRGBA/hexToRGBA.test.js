import hexToRGBA from "./hexToRGBA";

describe("colors/hexToRGBA", () => {
  test("Converts various values", () => {
    expect(hexToRGBA("#34e0f5", 0.5)).toEqual("rgba(52, 224, 245, 0.5)");
    expect(hexToRGBA("34e0f5", 0.7)).toEqual("rgba(52, 224, 245, 0.7)");
    expect(hexToRGBA("#f3d")).toEqual("rgba(255, 51, 221, 1)");
    expect(hexToRGBA("f3d", 0.1)).toEqual("rgba(255, 51, 221, 0.1)");
  });
});
