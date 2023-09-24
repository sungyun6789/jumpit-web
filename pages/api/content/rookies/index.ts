import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface Content {
  contentType: string;
  id: number;
  imagePath: string;
  tags: {
    id: number;
    name: string;
  }[];
  title: string;
  url: string;
}

export interface ContentRookieResponse {
  code: string;
  message: string;
  result: {
    contents: Content[];
    page: number;
    totalCount: number;
  };
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<ContentRookieResponse>('https://api.jumpit.co.kr/api/content/rookies', {
        params: {
          page: req.query.page,
        },
      });
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export default handler;
