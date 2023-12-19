/**
 * @see {@link https://ko.javascript.info/cookie#ref-346}
 */
export function getCookie(cookieName: string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const setCookie = (cookieName: string, cookieValue: string, expires: Date) => {
  document.cookie = `${cookieName}=${cookieValue}; path=/; expires=${expires.toUTCString()}`;
};
