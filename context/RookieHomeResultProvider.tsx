import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext } from 'react';

import type { ReactNode } from 'react';
import type { RookieHomeResponse } from '~/pages/api/rookie/home';

export const RookieHomeResultContext = createContext<RookieHomeResponse['result'] | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const RookieHomeResultProvider = ({ children }: Props) => {
  const { data } = useQuery(['/rookie/home'], async () => {
    const { data } = await axios.get<RookieHomeResponse>('/api/rookie/home');
    return data;
  });

  return <RookieHomeResultContext.Provider value={data?.result}>{children}</RookieHomeResultContext.Provider>;
};

export default RookieHomeResultProvider;
