import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLORS from '~/constants/colors';
import type { InterviewJobCategoryResponse } from '~/pages/api/content/interviews/jobCategory';

const JobInterviewCategory = () => {
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

export default JobInterviewCategory;

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

  @media (max-width: 1080px) {
    line-height: 58px;
    margin-left: 16px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 46px;
  }
`;

const TagLayout = styled.section`
  margin: 24px auto 0;
  max-width: 1060px;

  @media (max-width: 1080px) {
    margin: 21px 0 0 16px;
    overflow-x: scroll;
    white-space: nowrap;

    /* 전체 스크롤바 */
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    /* 드래그 가능한 스크롤바, 현재 위치를 보여주는 스크롤바 */
    ::-webkit-scrollbar-thumb {
      background-color: rgb(221, 221, 221);
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }

    /* 스크롤바가 움직일 수 있는 영역 전체 */
    ::-webkit-scrollbar-track {
      background-color: rgb(250, 250, 250);
      border-radius: 10px;
    }
  }
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
  cursor: pointer;

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
    }}

  @media(max-width: 1080px) {
    margin-right: 8px;
  }
`;
