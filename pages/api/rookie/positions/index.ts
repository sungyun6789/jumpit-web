import axios from 'axios';

import type { PositionResponse } from '../../positions';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<PositionResponse>('https://api.jumpit.co.kr/api/rookie/positions', {
        params: {
          curation: req.query.curation,
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
