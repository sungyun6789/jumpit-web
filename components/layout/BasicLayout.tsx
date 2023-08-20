import styled from '@emotion/styled';

import Footer from '../base/Footer';
import Header from '../base/Header';

import AppDownload from './AppDownload';

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Block>{children}</Block>
      <AppDownload />
      <Footer />
    </>
  );
};

export default BasicLayout;

const Block = styled.main`
  position: relative;
  overflow-x: hidden;
  margin: auto;
  padding-top: 120px;
`;
