import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Footer from '../base/Footer';
import Header from '../base/Header';

import AppDownload from './AppDownload';

/** footer가 없는 페이지 목록 */
const FOOTER_FILTER_PATH = ['/rookie/position'];

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  const { pathname } = useRouter();

  return (
    <>
      <Header />
      <Block>{children}</Block>
      <AppDownload />
      {!FOOTER_FILTER_PATH.includes(pathname) && <Footer />}
    </>
  );
};

export default BasicLayout;

const Block = styled.main`
  position: relative;
  overflow-x: hidden;
  margin: auto;
  padding-top: 120px;
  height: 100%;
`;
