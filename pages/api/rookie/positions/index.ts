import axios from 'axios';

import type { PositionListResponse } from '../../positions';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<PositionListResponse>('https://api.jumpit.co.kr/api/rookie/positions', {
        params: {
          ...req.query,
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
