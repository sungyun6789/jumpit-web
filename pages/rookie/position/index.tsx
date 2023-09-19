import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext, useEffect } from 'react';
import RookiePositionTag from '~/components/rookie/RookiePositionTag';
import RookieSearchTypeSelector from '~/components/rookie/RookieSearchTypeSelector';

import type { CodeInitializeResponse } from '~/pages/api/rookie/code-initialize';

export const RookieCodeInitializeContext = createContext<CodeInitializeResponse['result'] | undefined>(undefined);

const RookiePositionPage = () => {
  const { isReady, pathname, query, push } = useRouter();

  const { data } = useQuery(
    ['/rookie/code-initialize'],
    async () => {
      const { data } = await axios.get<CodeInitializeResponse>('/api/rookie/code-initialize');
      return data;
    },
    { select: (data) => data.result }
  );

  useEffect(() => {
    if (isReady && !query.curation) {
      push({
        pathname,
        query: {
          ...query,
          curation: undefined,
        },
      });
    }
  }, [isReady]);

  return (
    <RookieCodeInitializeContext.Provider value={data}>
      <RookiePositionTag />
      <RookieSearchTypeSelector />
    </RookieCodeInitializeContext.Provider>
  );
};

export default RookiePositionPage;
