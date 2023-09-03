import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import PositionLayout from '~/components/layout/PositionLayout';
import PositionCardList from '~/components/position/PositionCardList';
import PositionSearchDetailTag from '~/components/position/PositionSearchDetailTag';
import PositionSearchSortType from '~/components/position/PositionSearchSortType';
import PositionTag from '~/components/position/PositionTag';

import type { PositionResponse } from '../api/positions';

const PositionsPage = () => {
  const [page, setPage] = useState(1);

  const { data } = useQuery(['/api/positions', page], async () => {
    const { data } = await axios.get<PositionResponse>('/api/positions', {
      params: {
        page,
        sort: 'rsp_rate',
        highlight: false,
      },
    });
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
