import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';

import CareerqnaCard from './CareerqnaCard';

import type { CareerqnaRespone } from '~/pages/api/content/career-qna/posts';

const PAGE = 1;
const PAGE_SIZE = 50;

const CareerqnaList = () => {
  const router = useRouter();
  const sort = router.query.sort;
  const category = router.query.category;

  const { data } = useQuery(
    ['/content/career-qna/posts', sort, category],
    async () => {
      const { data } = await axios.get<CareerqnaRespone>('/api/content/career-qna/posts', {
        params: { sort, page: PAGE, size: PAGE_SIZE },
      });
      return data.result.content;
    },
    { enabled: router.isReady }
  );

  return (
    <Block>
      {data?.map((value) => (
        <CareerqnaCard key={value.id} data={value} />
      ))}
    </Block>
  );
};

export default CareerqnaList;

const Block = styled.section`
  width: 780px;
  margin-top: 16px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 36px;
  border-radius: 12px;
  background-color: #fff;
`;
