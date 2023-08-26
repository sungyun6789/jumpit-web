import { Html, Head, Main, NextScript } from 'next/document';
import { CDN_PATH } from '~/constants/path';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={CDN_PATH + 'favicon.png'}></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal" />
      </body>
    </Html>
  );
}
