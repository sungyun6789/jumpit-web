import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PositionLayout from '~/components/layout/PositionLayout';
import PositionCardList from '~/components/position/PositionCardList';
import PositionSearchDetailTag from '~/components/position/PositionSearchDetailTag';
import PositionSearchSortType from '~/components/position/PositionSearchSortType';
import PositionTag from '~/components/position/PositionTag';
import generateDuplicateQueryKeys from '~/utils/generateDuplicateQueryKeys';

import type { PositionResponse } from '../api/positions';

const PositionsPage = () => {
  const { query } = useRouter();
  const [page, setPage] = useState(1);
  const [positionList, setPositionList] = useState<PositionResponse['result']['positions']>([]);
  const [ref, inView] = useInView();

  const sort = query?.sort ?? 'rsp_rate';

  const queryJobCategory = generateDuplicateQueryKeys(query, 'jobCategory');
  const queryTechStack = generateDuplicateQueryKeys(query, 'techStack');
  const queryTag = generateDuplicateQueryKeys(query, 'tag');

  const url =
    `/api/positions?page=${page}` + queryJobCategory + queryTechStack + queryTag + `&sort=${sort}` + `&highlight=false`;

  const { data } = useQuery([url], async () => {
    const { data } = await axios.get<PositionResponse>(url);
    return data.result;
  });

  useEffect(() => {
    if (data) {
      setPositionList([...positionList, ...data.positions]);
    }
  }, [data]);

  useEffect(() => {
    if (inView && positionList.length !== 0) {
      setPage(page + 1);
    }
  }, [inView]);

  return (
    <>
      <PositionTag title="직무 탐색" />
      <PositionLayout>
        <PositionSearchDetailTag />
        <PositionSearchSortType />
        <PositionCardList data={positionList} />
        <div ref={ref} />
      </PositionLayout>
    </>
  );
};

export default PositionsPage;
