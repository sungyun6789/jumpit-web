import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface InterviewContent {
  companyLogo: string;
  companyName: string;
  contentType: string;
  id: number;
  imagePath: string;
  jobCategories: {
    id: number;
    name: string;
  }[];
  readingTime: number;
  title: string;
  viewCnt: number;
}

export interface InterviewListResponse {
  code: string;
  message: string;
  result: {
    contents: InterviewContent[];
    page: number;
    totalCount: number;
  };
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<InterviewListResponse>('https://api.jumpit.co.kr/api/content/interviews', {
        params: {
          page: req.query.page,
          size: req.query.size,
          jobCategory: req.query.jobCategory,
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
