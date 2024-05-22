import setCookie from "./setCookie";

describe("cookies/setCookie", () => {
  const cookieName = "cookie";
  const cookieValue = "ValueForMyCookie";

  test("Test setCookie without expiration date", () => {
    setCookie({ name: cookieName, value: cookieValue });
    expect(document.cookie).toEqual(`${cookieName}=${cookieValue}`);
  });

  test("Test setCookie with expiration date", () => {
    const expirationDays = 1;
    setCookie({ name: cookieName, value: cookieValue, expirationDays });
    expect(document.cookie).toEqual(`${cookieName}=${cookieValue}`);
  });
});
