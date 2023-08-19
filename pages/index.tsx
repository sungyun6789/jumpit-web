import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext } from 'react';
import EmploymentEventBanner from '~/components/home/EmploymentEventBanner';
import MainTopContent from '~/components/home/MainTopContent';
import MiniBanner from '~/components/home/MiniBanner';
import PositionRecommendation from '~/components/home/PositionRecommend';
import ThemeZip from '~/components/home/ThemeZip';
import WeeklyPickPosition from '~/components/home/WeeklyPickPosition';

import type { HomeResponse } from './api/home';

export const HomeDataContext = createContext<HomeResponse['result'] | undefined>(undefined);

export default function Home() {
  const { data } = useQuery(['/api/home'], async () => {
    const { data } = await axios.get<HomeResponse>('/api/home');
    return data;
  });

  return (
    <HomeDataContext.Provider value={data?.result}>
      <MainTopContent />
      <ThemeZip />
      <PositionRecommendation />
      <WeeklyPickPosition />
      <EmploymentEventBanner />
      <MiniBanner />
    </HomeDataContext.Provider>
  );
}
