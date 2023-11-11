import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export interface CompanyInfoResponse {
  code: string;
  message: string;
  result: {
    id: number;
    companyLogo: string;
    companyName: string;
    companyInvestment: number;
    companySite: string;
    companyAddress: string;
    welfare: string;
    companyPeriod: number;
    employeeCnt: {
      csn: null;
      company_name: null;
      year: null;
      month: null;
      total_member_cnt: null;
      total_amount: null;
      join_cnt: null;
      leave_cnt: null;
    };
    companyService: {
      id: number;
      serviceName: string;
      serviceUrl: string;
      description: string;
    };
    companyTags: [
      {
        id: string;
        name: string;
      }
    ];
    techStacks: [];
    itCompanyStories: [];
    profileImages: {
      imagePath: string;
      sortNumber: number;
    }[];
    serviceTags: [];
    developerInterviews: [];
    followed: boolean;
  };
  status: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const companyId = req.query.id;
    const { data } = await axios.get<CompanyInfoResponse>(`https://api.jumpit.co.kr/api/company/${companyId}`);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default handler;
