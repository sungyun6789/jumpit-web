import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import RookieContentCard from './RookieContentCard';
import type { Content, ContentRookieResponse } from '~/pages/api/content/rookies';

/**
 * @todo 로그인 하지 않은 유저인 경우 태그 선택했을 때 컨텐츠 일부만 노출되도록 기능 구현
 */
const RookieContentList = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const { query } = useRouter();
  const tag = query.tag;

  const { data } = useQuery(
    ['/api/content/rookies', page, tag],
    async () => {
      const { data } = await axios.get<ContentRookieResponse>('/api/content/rookies', {
        params: {
          page,
          tag,
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

  useEffect(() => {
    if (data) {
      setPage(1);
      setContents(data);
    }
  }, [tag]);

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
