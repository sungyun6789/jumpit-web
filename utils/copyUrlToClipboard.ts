/**
 * @param url 복사할 주소, 서버에서 받아와서 설정하는 경우를 대비해서 타입 선언
 * @param title 복사할 때 띄우는 alert에 사용할 메시지
 */
const copyUrlToClipboard = async (url: string | undefined, title: string) => {
  if (url) {
    await window.navigator.clipboard.writeText(url);
    alert(title);
  }
};

export default copyUrlToClipboard;
