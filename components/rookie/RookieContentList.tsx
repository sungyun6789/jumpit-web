import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import RookieContentCard from './RookieContentCard';

import type { Content, ContentRookieResponse } from '~/pages/api/content/rookies';

const RookieContentList = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  const { data } = useQuery(
    ['/api/content/rookies', page],
    async () => {
      const { data } = await axios.get<ContentRookieResponse>('/api/content/rookies', {
        params: {
          page,
        },
      });
      return data;
    },
    { select: (data) => data.result.contents }
  );

  useEffect(() => {
    if (inView && contents.length !== 0) {
      setPage(page + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (data) {
      setContents([...contents, ...data]);
    }
  }, [data]);

  return (
    <div>
      <Block>
        {contents?.map((content) => (
          <RookieContentCard key={content.id} content={content} />
        ))}
      </Block>
      <RefBlock ref={ref} />
    </div>
  );
};

export default RookieContentList;

const Block = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px 80px;
  position: relative;
  box-sizing: content-box;

  @media (max-width: 600px) {
    padding: 0 0 80px;
  }
`;

const RefBlock = styled.div`
  margin-bottom: 100px;
`;
