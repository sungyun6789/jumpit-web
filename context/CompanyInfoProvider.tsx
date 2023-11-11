import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext } from 'react';

import type { ReactNode } from 'react';
import type { CompanyInfoResponse } from '~/pages/api/company/[id]';

export const CompanyInfoContext = createContext<CompanyInfoResponse['result'] | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const CompanyInfoProvier = ({ children }: Props) => {
  const { query } = useRouter();
  const companyId = query.id as string;

  const { data: companyInfo } = useQuery(
    [`/company/${companyId}`],
    async () => {
      const { data } = await axios.get<CompanyInfoResponse>(`/api/company/${companyId}`);
      return data.result;
    },
    { enabled: !!companyId }
  );

  return <CompanyInfoContext.Provider value={companyInfo}>{children}</CompanyInfoContext.Provider>;
};

export default CompanyInfoProvier;
