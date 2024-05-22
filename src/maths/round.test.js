import round from "./round";

describe("maths/round", () => {
  test("Should always return an int within the given range", () => {
    for (let i = 0; i < 100; i++) {
      const float = 3.123456;
      expect(round(float, 1)).toBe(3.1);
      expect(round(float, 2)).toBe(3.12);
      expect(round(float, 3)).toBe(3.123);
      expect(round(float, 4)).toBe(3.1235);
      expect(round(float, 5)).toBe(3.12346);
      expect(round(float, 6)).toBe(3.123456);
    }
  });
});
