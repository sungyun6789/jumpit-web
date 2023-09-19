import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext } from 'react';
import RookieBanner from '~/components/rookie/RookieBanner';
import RookieCurationList from '~/components/rookie/RookieCurationList';
import RookieFirstJob from '~/components/rookie/RookieFirstJob';
import RookieTip from '~/components/rookie/RookieTip';

import type { RookieHomeResponse } from '../api/rookie/home';

export const RookieHomeResultContext = createContext<RookieHomeResponse['result'] | undefined>(undefined);

const RookiePage = () => {
  const { data } = useQuery(['/rookie/home'], async () => {
    const { data } = await axios.get<RookieHomeResponse>('/api/rookie/home');
    return data;
  });

  return (
    <RookieHomeResultContext.Provider value={data?.result}>
      <RookieBanner />
      <RookieCurationList />
      <RookieFirstJob />
      <RookieTip />
    </RookieHomeResultContext.Provider>
  );
};

export default RookiePage;
