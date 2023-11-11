import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface CompanyPositionResponse {
  code: string;
  message: string;
  result: {
    id: number;
    title: string;
    companyName: string;
    imagePath: string;
    closedAt: string;
    alwaysOpen: boolean;
    scraped: boolean;
    celebration: number;
    techStacks: string[];
  }[];
  stauts: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const companyId = req.query.id;
    const { data } = await axios.get<CompanyPositionResponse>(
      `https://api.jumpit.co.kr/api/company/${companyId}/position`
    );
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default handler;
