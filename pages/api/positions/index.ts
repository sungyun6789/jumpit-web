import axios from 'axios';
import generateDuplicateQueryKeys from '~/utils/generateDuplicateQueryKeys';

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

  const jobCategory = generateDuplicateQueryKeys(query, 'jobCategory');
  const techStack = generateDuplicateQueryKeys(query, 'techStack');
  const tag = generateDuplicateQueryKeys(query, 'tag');

  const url =
    'https://api.jumpit.co.kr/api/positions' +
    `?page=${query.page}` +
    jobCategory +
    techStack +
    tag +
    `&sort=${query.sort}` +
    `&highlight=false`;

  if (req.method === 'GET') {
    const { data } = await axios.get<PositionResponse>(url);
    return res.json(data);
  }
};

export default handler;
