import styled from '@emotion/styled';

import Header from '../base/Header';

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Block>{children}</Block>
    </>
  );
};

export default BasicLayout;

const Block = styled.main`
  max-width: 1080px;
  margin: auto;
`;
