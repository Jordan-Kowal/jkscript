import getCookie from "./getCookie";

describe("cookies/getCookie", () => {
  test("Test getCookie", () => {
    const cookieName = "cookie";
    const cookieValue = "ValueForMyCookie";
    expect(getCookie(cookieName)).toEqual(null);
    // biome-ignore lint/suspicious/noDocumentCookie: This is a test
    document.cookie = `${cookieName}=${cookieValue}`;
    expect(getCookie(cookieName)).toEqual(cookieValue);
  });
});
