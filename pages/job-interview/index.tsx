import Head from 'next/head';
import ScrollTopButton from '~/components/common/ScrollTopButton';
import JobInterviewCategory from '~/components/interview/JobInterviewCategory';
import JobInterviewList from '~/components/interview/JobInterviewList';

const JobInterViewPage = () => {
  return (
    <>
      <Head>
        <title>점핏 | 개발자 인터뷰</title>
      </Head>
      <JobInterviewCategory />
      <JobInterviewList />
      <ScrollTopButton right={-110} />
    </>
  );
};

export default JobInterViewPage;
