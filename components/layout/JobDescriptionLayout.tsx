import styled from '@emotion/styled';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const JobDescriptionLayout = ({ children }: Props) => {
  return <Block>{children}</Block>;
};

export default JobDescriptionLayout;

const Block = styled.div`
  position: relative;
  padding: 60px 0 24px;
  max-width: 1060px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    padding: 40px 0 110px;
  }

  @media (max-width: 600px) {
    padding: 32px 0 80px;
  }
`;
