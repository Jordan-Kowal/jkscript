import maxLengthValidator from "./maxLengthValidator";

describe("validators/maxLengthValidator", () => {
  const text = "Hello";

  test("Short enough", () => {
    expect(maxLengthValidator(text, 5)).toEqual(true);
    expect(maxLengthValidator(text, 6)).toEqual(true);
  });

  test("Too long", () => {
    expect(maxLengthValidator(text, 4)).not.toEqual(true);
    expect(maxLengthValidator(text, 3)).not.toEqual(true);
  });
});
