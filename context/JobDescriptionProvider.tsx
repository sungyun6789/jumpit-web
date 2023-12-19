import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { PositionResponse } from '~/pages/api/position/[id]';

export const JobDescriptionContext = createContext<PositionResponse['result'] | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const JobDescriptionProvier = ({ children }: Props) => {
  const { query, isReady } = useRouter();
  const id = query.id;

  const { data } = useQuery(
    ['/api/position/', id],
    async () => {
      const { data } = await axios.get<PositionResponse>(`/api/position/${id}`);
      return data.result;
    },
    { enabled: isReady }
  );

  return <JobDescriptionContext.Provider value={data}>{children}</JobDescriptionContext.Provider>;
};

export default JobDescriptionProvier;
