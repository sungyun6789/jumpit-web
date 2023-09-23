import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext } from 'react';

import type { ReactNode } from 'react';
import type { ThemeBannerResponse } from '~/pages/api/themes/banners/home';

export const ThemeBannerContext = createContext<ThemeBannerResponse['result'] | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const ThemeBannerProvider = ({ children }: Props) => {
  const { data } = useQuery(['/api/themes/banners/home'], async () => {
    const { data } = await axios.get<ThemeBannerResponse>('/api/themes/banners/home');
    return data.result;
  });

  return <ThemeBannerContext.Provider value={data}>{children}</ThemeBannerContext.Provider>;
};

export default ThemeBannerProvider;
