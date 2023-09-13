import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface RookieHomeResponse {
  code: string;
  message: string;
  result: {
    contents: {
      contentType: string;
      id: number;
      imagePath: string;
      tags: {
        id: number;
        name: string;
      }[];
      title: string;
      url: string;
    }[];
    curation_top: {
      emoticon: string;
      explain: string;
      id: number;
      name: string;
      tags: string[];
    }[];
  };
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<RookieHomeResponse>('https://api.jumpit.co.kr/api/rookie/home');
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export default handler;
