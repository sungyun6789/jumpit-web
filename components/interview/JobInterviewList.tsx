import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import JobInterviewCard from './JobInterviewCard';

import type { InterviewContent, InterviewListResponse } from '~/pages/api/content/interviews';

const PAGE_SIZE = 15;

const JobInterviewList = () => {
  const [page, setPage] = useState(1);
  const [interviewContentList, setInterviewContentList] = useState<InterviewContent[]>([]);
  const [ref, inView] = useInView();

  const { data } = useQuery(['/api/content/interviews', page], async () => {
    const { data } = await axios.get<InterviewListResponse>('/api/content/interviews', {
      params: {
        page,
        size: PAGE_SIZE,
      },
    });
    return data.result.contents;
  });

  useEffect(() => {
    if (inView && interviewContentList.length !== 0) {
      setPage(page + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (data) {
      setInterviewContentList([...interviewContentList, ...data]);
    }
  }, [data]);

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
`;

const RefBlock = styled.div`
  margin-bottom: 100px;
`;
