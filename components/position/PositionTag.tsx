import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLORS from '~/constants/colors';
import { JOB_CATEGORY, JOB_NUMBER } from '~/constants/jobCategory';
import usePositionQueryPush from '~/hooks/usePositionQueryPush';
import { mont } from '~/pages/_app';
import generateDuplicateQueryKeys from '~/utils/generateDuplicateQueryKeys';

import type { TechStacks } from '~/constants/jobCategory';

const getStorageValue = (): number[] => {
  const storageValue = window.localStorage.getItem('j_sr_job');
  return storageValue ? JSON.parse(storageValue) : [];
};

const setStorageValue = (jobs: number[]) => {
  window.localStorage.setItem('j_sr_job', JSON.stringify(jobs));
};

interface Props {
  title: string;
}

/**
 * @todo 직무 선택시 관련 기술 스택 태그 추가
 */
const PositionTag = ({ title }: Props) => {
  const { query, isReady } = useRouter();
  const { push } = usePositionQueryPush();
  const [selectedJobTechStacks, setSelectedJobTechStacks] = useState<TechStacks['techStacks']>([]);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>();

  const queryCategory = query.jobCategory === '{}' ? undefined : (query.jobCategory as string[]);

  const queryPush = () => {
    const jobs = getStorageValue();
    push('jobCategory', jobs);
  };

  const onJobCategoryClick = (categoryNumber: number) => {
    if (categoryNumber === 0) {
      setStorageValue([]);
      queryPush();
      return;
    }

    const jobs = getStorageValue();

    const updatedJobs = jobs.includes(categoryNumber)
      ? jobs.filter((job) => job !== categoryNumber)
      : [...jobs, categoryNumber];

    if (updatedJobs.length > 5) {
      return alert('직무는 5개까지 선택가능합니다');
    }

    setStorageValue(updatedJobs);
    queryPush();
  };

  const onTechStackClick = (stack: string) => {
    if (selectedTechStacks?.includes(stack)) {
      return setSelectedTechStacks(selectedTechStacks.filter((techStack) => techStack !== stack));
    }

    return setSelectedTechStacks([...(selectedTechStacks ?? []), stack]);
  };

  useEffect(() => {
    queryPush();
  }, []);

  useEffect(() => {
    push('techStack', selectedTechStacks ?? []);
  }, [selectedTechStacks]);

  useEffect(() => {
    if (query.techStack) {
      const queryTechStack = generateDuplicateQueryKeys(query, 'techStack', true) as string[];
      setSelectedTechStacks(queryTechStack);
    }
  }, [isReady]);

  useEffect(() => {
    if (queryCategory) {
      // 쿼리를 사용해서 내가 선택한 직무의 기술 스택을 가져옴 (1 ~ 3)
      const queries = typeof queryCategory === 'string' ? [queryCategory] : queryCategory;
      const jobNames = queries.map((id) => JOB_NUMBER[+id]);
      const techStacks = jobNames.map((name) => JOB_CATEGORY[name].techStacks).flat();

      const uniqueNames = Array.from(new Set(techStacks.map((stack) => stack.name)));
      const uniqueObjects = uniqueNames.map((name) => techStacks.find((stack) => stack.name === name)!);

      setSelectedJobTechStacks(uniqueObjects);
    }
  }, [queryCategory]);

  return (
    <Block>
      <Title>{title}</Title>
      <TagListBlock>
        {Object.entries(JOB_CATEGORY).map(([key, value]) => (
          <Tag
            key={key}
            isSelected={(queryCategory ?? ['0']).includes(value.no.toString())}
            type="button"
            onClick={() => onJobCategoryClick(value.no)}
          >
            {key}
          </Tag>
        ))}
      </TagListBlock>

      <TechStackListBlock>
        {selectedJobTechStacks.map((stack) => (
          <TechStackTag
            key={stack.name}
            isSelected={(selectedTechStacks ?? []).includes(stack.name)}
            className={mont.className}
            onClick={() => onTechStackClick(stack.name)}
          >
            <TechStackLogo src={stack.logo} width={20} height={20} alt="logo" />
            {stack.name}
          </TechStackTag>
        ))}
      </TechStackListBlock>
    </Block>
  );
};

export default PositionTag;

const Block = styled.section`
  max-width: 1060px;
  margin: 32px auto 50px;

  @media (max-width: 1080px) {
    margin: 32px auto 30px 16px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 72px;
  letter-spacing: -0.5px;
  font-weight: bold;

  @media (max-width: 1080px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const TagListBlock = styled.article`
  margin-top: 24px;

  @media (max-width: 1080px) {
    white-space: nowrap;
    overflow-x: scroll;
  }
`;

const Tag = styled.button<{ isSelected: boolean }>`
  padding: 3px 16px;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: ${(props) => (props.isSelected ? '#fff' : '#444444')};
  border: ${(props) => `1px solid ${props.isSelected ? COLORS.primary : '#e4e4e4'}`};
  border-radius: 20px;
  background-color: ${(props) => (props.isSelected ? COLORS.primary : '#fff')};
  cursor: pointer;
  margin: 0px 10px 10px 0px;
  font-family: inherit;

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
    }}
`;

const TechStackListBlock = styled(TagListBlock)`
  margin: initial;
`;

const TechStackTag = styled(Tag)`
  background-color: #e5f8ec;
  border: none;
  padding: 9px 16px;
  line-height: 16px;
  font-size: 15px;
  font-weight: 500;

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
      backgroundColor: COLORS.primary,
    }}
`;

const TechStackLogo = styled(Image)`
  vertical-align: middle;
  margin-right: 6px;
  border-radius: 4px;
`;
