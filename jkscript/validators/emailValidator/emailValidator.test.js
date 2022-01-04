import emailValidator from "./emailValidator";

describe("validators/emailValidator", () => {
  test("Valid emails", () => {
    expect(emailValidator("email@address.com")).toEqual(true);
    expect(emailValidator("e.mail@ad.dress.com")).toEqual(true);
  });

  test("Invalid emails", () => {
    expect(emailValidator("e.m@il@ad.dress.com")).not.toEqual(true);
    expect(emailValidator("Not an address")).not.toEqual(true);
    expect(emailValidator("33.33@33@33")).not.toEqual(true);
  });
});
