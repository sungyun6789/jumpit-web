import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export type CareerqnaRespone = {
  message: string;
  status: number;
  code: string;
  result: {
    content: {
      category: {
        id: number;
        categoryName: string;
        categoryEmoticon: string;
      };
      commentCount: number;
      contents: string;
      createdAt: string;
      id: number;
      like: boolean;
      likeCount: number;
      title: string;
      writer: string;
    }[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: {
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      sort: { empty: boolean; sorted: boolean; unsorted: boolean };
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
      unpaged: boolean;
    };
    size: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    totalElements: number;
    totalPages: number;
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { data } = await axios.get<CareerqnaRespone>('https://api.jumpit.co.kr/api/content/career-qna/posts', {
        params: {
          sort: req.query.sort,
          page: req.query.page,
          size: req.query.size,
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
