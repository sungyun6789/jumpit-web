import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface CodeInitializeResponse {
  code: string;
  message: string;
  result: {
    curation: {
      emoticon: string;
      explain: string;
      id: number;
      name: string;
      tags: string[];
    }[];
    jobCategory: {
      id: number;
      name: string;
      recommendTechStacks: {
        name: string;
        imagePath: string;
      }[];
    };
    locationTag: {
      fullName: string;
      id: number;
      legalDongCode: string;
      locationTags: unknown[];
      name: string;
      parentId: unknown;
    };
    sort: {
      default: boolean;
      id: string;
      name: string;
      searchDefault: boolean;
    }[];
  };
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<CodeInitializeResponse>('https://api.jumpit.co.kr/api/rookie/code-initialize');
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export default handler;
