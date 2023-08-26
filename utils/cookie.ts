/**
 * @see {@link https://ko.javascript.info/cookie#ref-346}
 */
export function getCookie(name: string) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const setCookie = (cookieName: string, cookieValue: string, expired: Date) => {
  document.cookie = `${cookieName}=${cookieValue}; Expires=${expired}`;
};
