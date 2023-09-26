import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLORS from '~/constants/colors';

import type { InterviewJobCategoryResponse } from '~/pages/api/content/interviews/jobCategory';

const JobInterViewTag = () => {
  const { query, push } = useRouter();
  const [selectedTagId, setSelectedTagId] = useState<number | string>();

  const { data } = useQuery(
    ['/api/content/interviews/jobCategory'],
    async () => {
      const { data } = await axios.get<InterviewJobCategoryResponse>('/api/content/interviews/jobCategory');
      return data;
    },
    {
      select: (data) => ({ ...data, result: [...[{ id: 0, name: '전체', sortNumber: 0 }], ...data.result] }),
    }
  );

  const onClick = (id: number) => {
    if (id === 0) {
      return push({ query: null });
    }
    push({ query: { jobCategory: id } });
  };

  useEffect(() => {
    if (query.jobCategory) {
      return setSelectedTagId(+query.jobCategory);
    }
    setSelectedTagId(0);
  }, [query, data]);

  return (
    <Block>
      <Title>개발자 인터뷰</Title>

      <TagLayout>
        {data?.result.map((value) => (
          <Tag key={value.id} isSelected={value.id == selectedTagId} onClick={() => onClick(value.id)}>
            {value.name}
          </Tag>
        ))}
      </TagLayout>
    </Block>
  );
};

export default JobInterViewTag;

const Block = styled.div`
  max-width: 1080px;
  margin: 32px auto auto;
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 72px;
  letter-spacing: -0.5px;
  max-width: 1060px;
  margin: 0 auto;
`;

const TagLayout = styled.section`
  margin: 24px auto 0;
  max-width: 1060px;
`;

const Tag = styled.button<{ isSelected: boolean }>`
  margin: 0 10px 10px 0;
  padding: 3px 16px;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.5px;
  border-radius: 20px;
  color: ${(props) => (props.isSelected ? '#fff' : '#444444')};
  border: ${(props) => `1px solid ${props.isSelected ? COLORS.primary : '#e4e4e4'}`};
  background-color: ${(props) => (props.isSelected ? COLORS.primary : '#fff')};
  font-family: inherit;
  cursor: pointer;

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
    }}
`;
