import JobInterviewCategory from '~/components/interview/JobInterviewCategory';
import JobInterviewList from '~/components/interview/JobInterviewList';
import JobInterviewScrollTopButton from '~/components/interview/JobInterviewScrollTopButton';

const JobInterViewPage = () => {
  return (
    <>
      <JobInterviewCategory />
      <JobInterviewList />
      <JobInterviewScrollTopButton />
    </>
  );
};

export default JobInterViewPage;
