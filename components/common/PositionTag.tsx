import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import COLORS from '~/constants/colors';
import { JOB_CATEGORY } from '~/constants/jobCategory';

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
  const { pathname, query, push } = useRouter();

  const queryCategory = query.jobCategory === '{}' ? undefined : (query.jobCategory as string[]);

  const queryPush = () => {
    const jobs = getStorageValue();
    const queryParams = jobs.map((job, index) => (index === 0 ? '?' : '&') + `jobCategory=${job}`).join('');
    push(pathname + queryParams);
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
      <TagBlock>
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
      </TagBlock>
    </Block>
  );
};

export default PositionTag;

const Block = styled.section`
  max-width: 1060px;
  margin: 32px auto 50px;
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 72px;
  letter-spacing: -0.5px;
  font-weight: bold;
`;

const TagBlock = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
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

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
    }}
`;
