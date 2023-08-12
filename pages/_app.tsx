import '~/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { AppProps } from 'next/app';

import BasicLayout from '~/components/layout/BasicLayout';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
