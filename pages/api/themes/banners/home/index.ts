import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface ThemeBannerResponse {
  code: string;
  message: string;
  result: {
    bgColor: string;
    textColor: string;
    theme: string;
    themeBanner: {
      mobile: string;
      pc: string;
      tablet: string;
    };
    title: string;
  }[];
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { data } = await axios.get<ThemeBannerResponse>('https://api.jumpit.co.kr/api/themes/banners/home');
    return res.json(data);
  }
};

export default handler;
