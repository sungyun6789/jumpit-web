import Head from 'next/head';
import { useContext } from 'react';
import { JobDescriptionContext } from '~/context/JobDescriptionProvider';

const JobDescriptionHead = () => {
  const data = useContext(JobDescriptionContext);

  if (!data) return null;

  return (
    <Head>
      <title>
        점핏 | {data.title} | {data.companyName}
      </title>
    </Head>
  );
};

export default JobDescriptionHead;
