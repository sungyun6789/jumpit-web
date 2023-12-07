import ScrollTopButton from '~/components/common/ScrollTopButton';
import JobInterviewCategory from '~/components/interview/JobInterviewCategory';
import JobInterviewList from '~/components/interview/JobInterviewList';

const JobInterViewPage = () => {
  return (
    <>
      <JobInterviewCategory />
      <JobInterviewList />
      <ScrollTopButton right={-110} />
    </>
  );
};

export default JobInterViewPage;
