import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import PositionLayout from '~/components/layout/PositionLayout';
import PositionCardList from '~/components/position/PositionCardList';
import PositionSearchDetailTag from '~/components/position/PositionSearchDetailTag';
import PositionSearchSortType from '~/components/position/PositionSearchSortType';
import PositionTag from '~/components/position/PositionTag';

import type { PositionResponse } from '../api/positions';

const PositionsPage = () => {
  const { query } = useRouter();
  const [page, setPage] = useState(1);

  const sort = query?.sort ?? 'rsp_rate';
  const techStack = query?.techStack;

  const queryJobCategory = (
    query?.jobCategory ? (typeof query.jobCategory === 'string' ? [query.jobCategory] : query.jobCategory) : []
  )
    .map((value) => `&jobCategory=${value}`)
    .join('');

  const queryTechStack = (
    query?.techStack ? (typeof query.techStack === 'string' ? [query.techStack] : query.techStack) : []
  )
    .map((value) => `&techStack=${value}`)
    .join('');

  const queryTag = (query?.tag ? (typeof query.tag === 'string' ? [query.tag] : query.tag) : [])
    .map((value) => `&tag=${value}`)
    .join('');

  const url =
    `/api/positions?page=${page}` + queryJobCategory + queryTechStack + queryTag + `&sort=${sort}` + `&highlight=false`;

  const { data } = useQuery(['/api/positions', page, sort, techStack], async () => {
    const { data } = await axios.get<PositionResponse>(url);
    return data.result;
  });

  return (
    <>
      <PositionTag title="직무 탐색" />
      <PositionLayout>
        <PositionSearchDetailTag />
        <PositionSearchSortType />
        <PositionCardList data={data?.positions} />
      </PositionLayout>
    </>
  );
};

export default PositionsPage;
