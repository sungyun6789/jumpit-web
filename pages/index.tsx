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
  const [selectedJob, setSelectedJob] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (getCookie('hide_event_fit_apply') !== 'true') {
      setIsOpen(true);
    }

    const storageValue = window.localStorage.getItem('j_sr_job');
    if (storageValue) {
      const jobs = JSON.parse(storageValue);
      const randomIndex = Math.floor(Math.random() * jobs.length);
      setSelectedJob(jobs[randomIndex]);
    }
  }, []);

  const { data } = useQuery(['/api/home', selectedJob], async () => {
    const { data } = await axios.get<HomeResponse>('/api/home', {
      // 실제 서비스에서는 중복된 키(jobCategory)를 여러 개 보내고 서버에서 분기 처리하는데 해당 프로젝트에서는 클라이언트에서 분기 처리하고 단일 카테고리를 보냄
      params: {
        jobCategory: selectedJob,
      },
    });
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
