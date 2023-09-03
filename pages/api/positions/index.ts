import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface PositionResponse {
  code: string;
  message: string;
  result: {
    keyword: string;
    keywordType: string;
    page: number;
    positions: {
      alwaysOpen: boolean;
      applied: number;
      celebration: number;
      closedAt: string;
      companyName: string;
      companyProfileId: number;
      id: number;
      imagePath: string;
      jobCategory: string;
      locations: string[];
      logo: string;
      maxCareer: number;
      minCareer: number;
      newcomer: boolean;
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
  const query = req.query;

  if (req.method === 'GET') {
    const { data } = await axios.get<PositionResponse>('https://api.jumpit.co.kr/api/positions', {
      params: {
        page: query.page ?? null,
        sort: query.sort ?? null,
        highlight: query.highlight ?? null,
      },
    });
    return res.json(data);
  }
};

export default handler;
