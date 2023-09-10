import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import COLORS from '~/constants/colors';
import { JOB_CATEGORY } from '~/constants/jobCategory';
import usePositionQueryPush from '~/hooks/usePositionQueryPush';

const getStorageValue = (): number[] => {
  const storageValue = window.localStorage.getItem('j_sr_job');
  return storageValue ? JSON.parse(storageValue) : [];
};

const setStorageValue = (jobs: number[]) => {
  window.localStorage.setItem('j_sr_job', JSON.stringify(jobs));
};

interface Props {
  title: string;
  resetPage: () => void;
}

const JobCategoryTag = ({ title, resetPage }: Props) => {
  const { query } = useRouter();
  const { push } = usePositionQueryPush();

  const queryCategory = query.jobCategory === '{}' ? undefined : (query.jobCategory as string[]);

  const jobCategoryQueryPush = () => {
    const jobs = getStorageValue();
    push('jobCategory', jobs);
  };

  const onJobCategoryClick = (categoryNumber: number) => {
    // 초기화를 query 변경하는 시점(useEffect)으로 설정하면 쿼리 변경과 page 변경으로 인해 네트워크 요청이 2번 발생해서 여기서 처리해야 함
    resetPage();

    // "전체" 카테고리 선택
    if (categoryNumber === 0) {
      setStorageValue([]);
      jobCategoryQueryPush();
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
    jobCategoryQueryPush();
  };

  return (
    <>
      <Title>{title}</Title>
      <Block>
        {Object.entries(JOB_CATEGORY).map(([key, value]) => (
          <Tag
            key={key}
            isSelected={(queryCategory
              ? typeof queryCategory === 'string'
                ? [queryCategory]
                : queryCategory
              : ['0']
            ).includes(value.no.toString())}
            type="button"
            onClick={() => onJobCategoryClick(value.no)}
          >
            {key}
          </Tag>
        ))}
      </Block>
    </>
  );
};

export default JobCategoryTag;

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

const Block = styled.article`
  margin-top: 24px;

  @media (max-width: 1080px) {
    white-space: nowrap;
    overflow-x: scroll;
  }
`;

const Tag = styled.button<{ isSelected: boolean }>`
  line-height: 32px;
  letter-spacing: -0.5px;
  border-radius: 20px;
  margin: 0px 10px 10px 0px;
  padding: 3px 16px;
  color: ${(props) => (props.isSelected ? '#fff' : '#444444')};
  border: ${(props) => `1px solid ${props.isSelected ? COLORS.primary : '#e4e4e4'}`};
  background-color: ${(props) => (props.isSelected ? COLORS.primary : '#fff')};
  font-size: 16px;
  font-family: inherit;
  cursor: pointer;

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
    }}
`;
