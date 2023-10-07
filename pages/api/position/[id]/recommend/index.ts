import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface PositionRecommendResponse {
  code: string;
  message: string;
  result: {
    condition: boolean;
    positions: {
      alwaysOpen: boolean;
      closedAt: string;
      companyName: string;
      companyProfileId: number;
      id: number;
      imagePath: string;
      locations: string[];
      logo: string;
      maxCareer: number;
      minCareer: number;
      newcomer: boolean;
      recentModifiedAt: string;
      scrapCount: number;
      scraped: boolean;
      techStacks: string[];
      title: string;
      viewCount: number;
    }[];
    totalCount: number;
  };
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<PositionRecommendResponse>(
        'https://api.jumpit.co.kr/api/position/19797/recommend'
      );
      res.json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export default handler;
