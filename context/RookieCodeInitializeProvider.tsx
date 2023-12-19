import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { CodeInitializeResponse } from '~/pages/api/rookie/code-initialize';

export const RookieCodeInitializeContext = createContext<CodeInitializeResponse['result'] | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const RookieCodeInitializeProvider = ({ children }: Props) => {
  const { data } = useQuery(
    ['/rookie/code-initialize'],
    async () => {
      const { data } = await axios.get<CodeInitializeResponse>('/api/rookie/code-initialize');
      return data;
    },
    { select: (data) => data.result }
  );

  return <RookieCodeInitializeContext.Provider value={data}>{children}</RookieCodeInitializeContext.Provider>;
};

export default RookieCodeInitializeProvider;
