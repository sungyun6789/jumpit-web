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
      applied: boolean;
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
  try {
    if (req.method === 'GET') {
      const query = new URLSearchParams(req.query as unknown as URLSearchParams).toString();
      const { data } = await axios.get<PositionResponse>(`https://api.jumpit.co.kr/api/positions?${query}`);
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export default handler;
