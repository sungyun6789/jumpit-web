import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface CompanyServicePositionResponse {
  code: string;
  message: string;
  result: {
    recommendTag: {
      id: string;
      name: string;
    }[];
  };
  stauts: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const companyId = req.query.id;
    const { data } = await axios.get<CompanyServicePositionResponse>(
      `https://api.jumpit.co.kr/api/company/${companyId}/service/position`
    );
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default handler;
