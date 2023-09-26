import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface InterviewJobCategoryResponse {
  code: string;
  message: string;
  result: {
    id: number;
    name: string;
    sortNumber: number;
  }[];
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<InterviewJobCategoryResponse>(
        'https://api.jumpit.co.kr/api/content/interviews/jobCategory'
      );
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export default handler;
