import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useInfiniteScroll from '~/hooks/useInfiniteScroll';

import FeedCard from './FeedCard';

import type { Content, ContentRookieResponse } from '~/pages/api/content/rookies';

const PAGE_SIZE = 12; // 클라이언트에서 따로 파라미터를 전송하지 않고, 서버에서 12개로 정의해서 전달받고 있음

const FeedCardList = () => {
  const [contentList, setContentList] = useState<Content[]>([]);
  const router = useRouter();
  const { page, hasNextPage, ref, inView, reset, changePage, disableNextPage } = useInfiniteScroll();

  const tag = router.query.tag;

  const { data } = useQuery(
    ['/api/content/rookies', page, tag],
    async () => {
      const { data } = await axios.get<ContentRookieResponse>('/api/content/rookies', {
        params: {
          page,
          tag: tag ?? null,
        },
      });
      return data.result.contents;
    },
    { enabled: hasNextPage && router.isReady }
  );

  useEffect(() => {
    if (inView && contentList.length !== 0) {
      changePage(page + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (data) {
      setContentList([...contentList, ...data]);
    }

    if (data && data.length !== PAGE_SIZE) {
      disableNextPage();
    }
  }, [data]);

  useEffect(() => {
    if (router.isReady) {
      reset();
      setContentList(data ?? []);
    }
  }, [router.query]);

  return (
    <>
      <Block>
        {contentList.map((content) => (
          <FeedCard key={content.id} data={content} />
        ))}
      </Block>
      <RefBlock ref={ref} />
    </>
  );
};

export default FeedCardList;

const Block = styled.section`
  box-sizing: content-box;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px 0;
  position: relative;
`;

const RefBlock = styled.div`
  margin-bottom: 80px;
`;
