type SetCookieProps = {
  name: string;
  value: string;
  expirationDays?: number;
};

const setCookie = ({ name, value, expirationDays }: SetCookieProps): void => {
  let expires = "";
  if (expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value}${expires}; path=/`;
};

export default setCookie;
