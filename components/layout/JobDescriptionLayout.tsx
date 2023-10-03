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
`;
