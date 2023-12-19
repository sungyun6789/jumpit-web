import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import JobInterviewCard from './JobInterviewCard';
import type { InterviewContent, InterviewListResponse } from '~/pages/api/content/interviews';

const PAGE_SIZE = 15;

const JobInterviewList = () => {
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [interviewContentList, setInterviewContentList] = useState<InterviewContent[]>([]);
  const [ref, inView] = useInView();
  const { query, isReady } = useRouter();

  const jobCategory = typeof query.jobCategory === 'string' ? query.jobCategory : null;

  const { data } = useQuery(
    ['/api/content/interviews', page, jobCategory],
    async () => {
      const { data } = await axios.get<InterviewListResponse>('/api/content/interviews', {
        params: {
          page,
          size: PAGE_SIZE,
          jobCategory,
        },
      });
      return data.result.contents;
    },
    { enabled: hasNextPage && isReady }
  );

  useEffect(() => {
    if (inView && interviewContentList.length !== 0) {
      setPage(page + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (data) {
      setInterviewContentList([...interviewContentList, ...data]);
    }

    if (data && data.length !== PAGE_SIZE) {
      setHasNextPage(false);
    }
  }, [data]);

  useEffect(() => {
    if (isReady) {
      setPage(1);
      setHasNextPage(true);
      setInterviewContentList(data ?? []);
    }
  }, [query]);

  return (
    <Block>
      {interviewContentList.map((content) => (
        <JobInterviewCard key={content.id} content={content} />
      ))}
      <RefBlock ref={ref} />
    </Block>
  );
};

export default JobInterviewList;

const Block = styled.section`
  width: 1080px;
  display: flex;
  flex-wrap: wrap;
  margin: 60px auto 50px;

  @media (max-width: 1080px) {
    width: calc(100% - 20px);
    margin: 24px auto 0;
  }
`;

const RefBlock = styled.div`
  margin-bottom: 100px;
`;
