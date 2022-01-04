import requiredValidator from "./requiredValidator";

describe("validators/requiredValidator", () => {
  test("Various accepted values", () => {
    expect(requiredValidator("Hello")).toEqual(true);
    expect(requiredValidator(33)).toEqual(true);
  });

  test("Missing values", () => {
    expect(requiredValidator("")).not.toEqual(true);
    expect(requiredValidator(false)).not.toEqual(true);
    expect(requiredValidator(0)).not.toEqual(true);
  });
});
