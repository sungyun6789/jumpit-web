import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { HomeResponse } from '~/pages/api/home';

export const HomeDataContext = createContext<HomeResponse['result'] | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const HomeDataProvier = ({ children }: Props) => {
  const [selectedJob, setSelectedJob] = useState<string>();

  useEffect(() => {
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

  return <HomeDataContext.Provider value={data}>{children}</HomeDataContext.Provider>;
};

export default HomeDataProvier;
