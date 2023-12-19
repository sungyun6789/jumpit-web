import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PositionCardList from '../position/PositionCardList';
import type { PositionListResponse } from '~/pages/api/positions';

const RookieSearchPositionList = () => {
  const [page, setPage] = useState(1);
  const [positionList, setPositionList] = useState<PositionListResponse['result']['positions']>([]);
  const { isReady, query } = useRouter();
  const [ref, inView] = useInView();

  const { data } = useQuery(
    ['/positions', query, page],
    async () => {
      const { data } = await axios.get<PositionListResponse>('/api/rookie/positions', {
        params: {
          curation: query.curation ?? '',
          page,
          sort: query.sort ?? null,
        },
      });
      return data;
    },
    { enabled: isReady }
  );

  useEffect(() => {
    if (inView && data) {
      setPage(page + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (data) {
      setPositionList([...positionList, ...data.result.positions]);
    }
  }, [data]);

  // 쿼리가 변경되면 저장된 데이터 초기화
  useEffect(() => {
    if (isReady && positionList.length !== 0) {
      setPositionList(data?.result.positions ?? []);
    }
  }, [query]);

  return (
    <Block>
      <PositionCardList data={positionList} />
      <div ref={ref} />
    </Block>
  );
};

export default RookieSearchPositionList;

const Block = styled.section`
  background-color: #fbfbfd;
  padding-bottom: 80px;

  @media (max-width: 600px) {
    padding: 0 4px;

    .item {
      padding: 6px;
    }
  }
`;
