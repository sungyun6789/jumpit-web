import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PositionLayout from '~/components/layout/PositionLayout';
import TagLayout from '~/components/layout/TagLayout';
import PositionCardList from '~/components/position/PositionCardList';
import PositionSearchDetailTag from '~/components/position/PositionSearchDetailTag';
import PositionSearchSortType from '~/components/position/PositionSearchSortType';
import JobCategoryTag from '~/components/tag/JobCategoryTag';
import TechStackTag from '~/components/tag/TechStackTag';
import generateDuplicateQueryKeys from '~/utils/generateDuplicateQueryKeys';

import type { PositionListResponse } from '../api/positions';

const PositionsPage = () => {
  const { query, isReady } = useRouter();
  const [page, setPage] = useState(1);
  const [positionList, setPositionList] = useState<PositionListResponse['result']['positions']>([]);
  const [ref, inView] = useInView();

  const sort = query?.sort ?? 'rsp_rate';

  const queryJobCategory = generateDuplicateQueryKeys(query, 'jobCategory');
  const queryTechStack = generateDuplicateQueryKeys(query, 'techStack');
  const queryTag = generateDuplicateQueryKeys(query, 'tag');

  const url =
    `/api/positions?page=${page}` + queryJobCategory + queryTechStack + queryTag + `&sort=${sort}` + `&highlight=false`;

  const { data } = useQuery(
    [url],
    async () => {
      const { data } = await axios.get<PositionListResponse>(url);
      return data.result;
    },
    { enabled: isReady }
  );

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

  useEffect(() => {
    setPositionList([]);
  }, [query]);

  const resetPage = useCallback(() => setPage(1), []);

  return (
    <>
      <Head>
        <title>점핏 | 개발 직무 탐색</title>
      </Head>
      <TagLayout>
        <JobCategoryTag title="개발 직무 탐색" resetPage={resetPage} />
        <TechStackTag resetPage={resetPage} />
      </TagLayout>
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
