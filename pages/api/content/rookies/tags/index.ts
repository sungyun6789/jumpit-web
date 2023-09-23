import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface ContentRookieTagResponse {
  code: string;
  message: string;
  result: {
    id: number;
    name: string;
  }[];
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<ContentRookieTagResponse>('https://api.jumpit.co.kr/api/content/rookies/tags');
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export default handler;
