import minMaxLengthValidator from "./minMaxLengthValidator";

describe("validators/minMaxLengthValidator", () => {
  const text = "Hello";

  test("Right between the range", () => {
    expect(minMaxLengthValidator(text, 3, 5)).toEqual(true);
    expect(minMaxLengthValidator(text, 5, 7)).toEqual(true);
  });

  test("Either too short or too long", () => {
    expect(minMaxLengthValidator(text, 6, 10)).not.toEqual(true);
    expect(minMaxLengthValidator(text, 2, 4)).not.toEqual(true);
  });
});
