import '~/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Noto_Sans_KR, Montserrat } from 'next/font/google';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import BasicLayout from '~/components/base/BasicLayout';
import type { AppProps } from 'next/app';

export const noto = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const mont = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>점핏 | 개발자 커리어 점프</title>
        <meta name="description" content="개발자 커리어 점프, 점핏" />
        <meta
          name="keywords"
          content="개발자 채용,이력서,이력서양식,스타트업 채용,대기업 채용,취업,구인,구직,면접제안,기업정보,커리어,커리어개발,기업정보,채용정보"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.jumpit.co.kr/" />
        <meta property="og:title" content="점핏" />
        <meta property="og:description" content="개발자 커리어 점프, 점핏" />
        <meta property="og:url" content="https://www.jumpit.co.kr/" />
        <meta property="og:site_name" content="개발자 커리어 점프, 점핏" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image" content="https://cdn.jumpit.co.kr/jumpit/jumpit_share.png" />
        <meta property="og:image:width" content="800" />
        <meta content="420" property="og:image:height" />
        <meta content="website" property="og:type" />
      </Head>
      <div>
        <SessionProvider session={session}>
          <BasicLayout>
            <Component {...pageProps} />
          </BasicLayout>
        </SessionProvider>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
