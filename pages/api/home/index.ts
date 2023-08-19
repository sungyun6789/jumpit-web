import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface Position {
  id: number;
  logo: string;
  imagePath: string;
  title: string;
  companyName: string;
  techStacks: string[];
  scrapCount: number;
  viewCount: number;
  newcomer: boolean;
  minCareer: number;
  maxCareer: number;
  celebration: number;
  locations: string[];
  alwaysOpen: boolean;
  closedAt: string;
  scraped: boolean;
}

export interface HomeResponse {
  code: string;
  message: string;
  result: {
    createdAt: string;
    id: string;
    mainBanners: {
      bannerId: number;
      contents: string;
      imagePath: string;
      link: string;
      newWindow: boolean;
      title: string;
    }[];
    newlyPositions: {
      parameters: { sort?: 'reg_dt' };
      positions: Position[];
      title: string;
    };
    noticeBanners: {
      createAt: string;
      title: string;
      url: string;
    }[];
    noticeModals: {
      companyProfileId: null;
      imagePath: string;
      noticeType: 'BLANK';
      positionId: number | number;
      url: string;
    }[];
    recommendPositionByProfile: null;
    userCurations: {
      id: number;
      title: string;
      type: 'TECH_BLOG' | 'TECH_SEMINAR';
      url: string;
    }[];
    weeklyPositions: {
      parameters: { jobCategory?: number };
      positions: Position[];
      title: string;
    };
  };
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { data } = await axios.get<HomeResponse>('https://api.jumpit.co.kr/api/home');
    return res.json(data);
  }
};

export default handler;
