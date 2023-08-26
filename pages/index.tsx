import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { createContext, useEffect, useState } from 'react';
import EmploymentEventBanner from '~/components/home/EmploymentEventBanner';
import MainTopContent from '~/components/home/MainTopContent';
import MiniBanner from '~/components/home/MiniBanner';
import Notice from '~/components/home/Notice';
import PositionRecommendation from '~/components/home/PositionRecommend';
import ThemeZip from '~/components/home/ThemeZip';
import WeeklyPickPosition from '~/components/home/WeeklyPickPosition';
import { TabletView } from '~/styles/breakpoint';
import { getCookie } from '~/utils/cookie';

const EventModal = dynamic(() => import('~/components/modal/EventModal'), { ssr: false });

import type { HomeResponse } from './api/home';
import type { ThemeBannerResponse } from './api/themes/banners/home';

export const HomeDataContext = createContext<HomeResponse['result'] | undefined>(undefined);
export const ThemeBannerContext = createContext<ThemeBannerResponse['result'] | undefined>(undefined);

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (getCookie('hide_event_fit_apply') !== 'true') {
      setIsOpen(true);
    }
  }, []);

  const { data } = useQuery(['/api/home'], async () => {
    const { data } = await axios.get<HomeResponse>('/api/home');
    return data.result;
  });

  const { data: themeBanner } = useQuery(['/api/themes/banners/home'], async () => {
    const { data } = await axios.get<ThemeBannerResponse>('/api/themes/banners/home');
    return data.result;
  });

  const close = () => setIsOpen(false);

  return (
    <>
      <HomeDataContext.Provider value={data}>
        <ThemeBannerContext.Provider value={themeBanner}>
          <MainTopContent />
          <ThemeZip />
          <PositionRecommendation />
          <WeeklyPickPosition />
          <TabletView>
            <Notice />
          </TabletView>
        </ThemeBannerContext.Provider>
      </HomeDataContext.Provider>

      <EmploymentEventBanner />
      <MiniBanner />
      {isOpen && <EventModal close={close} />}
    </>
  );
}
