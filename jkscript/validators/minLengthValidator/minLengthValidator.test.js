import minLengthValidator from "./minLengthValidator";

describe("validators/minLengthValidator", () => {
  const text = "Hello";

  test("Long enough", () => {
    expect(minLengthValidator(text, 4)).toEqual(true);
    expect(minLengthValidator(text, 5)).toEqual(true);
  });

  test("Too short", () => {
    expect(minLengthValidator(text, 6)).not.toEqual(true);
    expect(minLengthValidator(text, 7)).not.toEqual(true);
  });
});
