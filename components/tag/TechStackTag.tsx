import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLORS from '~/constants/colors';
import { JOB_CATEGORY, JOB_NUMBER } from '~/constants/jobCategory';
import { CDN_PATH } from '~/constants/path';
import { mont } from '~/pages/_app';

import type { TechStacks } from '~/constants/jobCategory';

const IMAGE_PATH = CDN_PATH + '/images/stacks';

interface Props {
  resetPage: () => void;
}

const TechStackTag = ({ resetPage }: Props) => {
  const { query } = useRouter();

  const [techStacks, setTechStacks] = useState<TechStacks['techStacks']>([]);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>();

  const queryCategory = query.jobCategory === '{}' ? undefined : (query.jobCategory as string[]);

  const onTechStackClick = (stack: string) => {
    // 초기화를 query 변경하는 시점(useEffect)으로 설정하면 쿼리 변경과 page 변경으로 인해 네트워크 요청이 2번 발생해서 여기서 처리해야 함
    resetPage();

    if (selectedTechStacks?.includes(stack)) {
      return setSelectedTechStacks(selectedTechStacks.filter((techStack) => techStack !== stack));
    }

    return setSelectedTechStacks([...(selectedTechStacks ?? []), stack]);
  };

  useEffect(() => {
    if (queryCategory) {
      // 쿼리를 사용해서 내가 선택한 직무의 기술 스택을 가져옴 (1 ~ 3)
      const queries = typeof queryCategory === 'string' ? [queryCategory] : queryCategory;
      const jobNames = queries.map((id) => JOB_NUMBER[+id]);
      const techStacks = jobNames.map((name) => JOB_CATEGORY[name].techStacks).flat();

      const uniqueNames = Array.from(new Set(techStacks.map((stack) => stack.name)));
      const uniqueObjects = uniqueNames.map((name) => techStacks.find((stack) => stack.name === name)!);

      setTechStacks(uniqueObjects);
    }
  }, [queryCategory]);

  return (
    <Block>
      {techStacks.map((stack) => (
        <Tag
          key={stack.name}
          isSelected={(selectedTechStacks ?? []).includes(stack.name)}
          className={mont.className}
          onClick={() => onTechStackClick(stack.name)}
        >
          <TechStackLogo src={IMAGE_PATH + stack.logo} width={20} height={20} alt="logo" />
          {stack.name}
        </Tag>
      ))}
    </Block>
  );
};

export default TechStackTag;

const Block = styled.article`
  @media (max-width: 1080px) {
    white-space: nowrap;
    overflow-x: scroll;
  }
`;

const Tag = styled.button<{ isSelected: boolean }>`
  line-height: 32px;
  letter-spacing: -0.5px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0px 10px 10px 0px;
  color: ${(props) => (props.isSelected ? '#fff' : '#222222')};
  background-color: ${(props) => (props.isSelected ? COLORS.primary : '#e5f8ec')};
  border: none;
  padding: 9px 16px;
  line-height: 16px;
  font-size: 15px;
  font-weight: ${(props) => (props.isSelected ? 'bold' : '500')};
`;

const TechStackLogo = styled(Image)`
  vertical-align: middle;
  margin-right: 6px;
  border-radius: 4px;
`;
