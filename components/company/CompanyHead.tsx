import Head from 'next/head';
import { useContext } from 'react';
import { CompanyInfoContext } from '~/context/CompanyInfoProvider';

const CompanyHead = () => {
  const data = useContext(CompanyInfoContext);

  if (!data) return null;

  return (
    <Head>
      <title>점핏 | {data.companyName}</title>
    </Head>
  );
};

export default CompanyHead;
