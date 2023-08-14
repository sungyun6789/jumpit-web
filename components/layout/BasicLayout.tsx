import styled from '@emotion/styled';

import Footer from '../base/Footer';
import Header from '../base/Header';

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Block>{children}</Block>
      <Footer />
    </>
  );
};

export default BasicLayout;

const Block = styled.main`
  margin: auto;
  padding-top: 120px;
`;
