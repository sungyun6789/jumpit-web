import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import COLORS from '~/constants/colors';
import { JOB_CATEGORY } from '~/constants/jobCategory';
import useRepeatedQueryParamKeys from '~/hooks/useRepeatedQueryParamKeys';

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

const PositionTag = ({ title }: Props) => {
  const { push } = useRepeatedQueryParamKeys();
  const { query } = useRouter();

  const queryCategory = query.jobCategory === '{}' ? undefined : (query.jobCategory as string[]);

  const queryPush = () => {
    const jobs = getStorageValue();
    push('jobCategory', jobs);
  };

  const onClick = (categoryNumber: number) => {
    if (categoryNumber === 0) {
      setStorageValue([]);
      queryPush();
      return;
    }

    const jobs = getStorageValue();
    const updatedJobs = jobs.includes(categoryNumber)
      ? jobs.filter((job) => job !== categoryNumber)
      : [...jobs, categoryNumber];
    setStorageValue(updatedJobs);
    queryPush();
  };

  useEffect(() => {
    queryPush();
  }, []);

  return (
    <Block>
      <Title>{title}</Title>
      <TagListBlock>
        {Object.entries(JOB_CATEGORY).map(([key, value]) => (
          <Tag
            key={key}
            isSelected={(queryCategory ?? ['0']).includes(value.toString())}
            type="button"
            onClick={() => onClick(value)}
          >
            {key}
          </Tag>
        ))}
      </TagListBlock>
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

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
    }}
`;
