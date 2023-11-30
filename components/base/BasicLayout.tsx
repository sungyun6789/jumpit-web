import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Footer from '../base/Footer';
import Header from '../base/Header';

import AppDownload from './AppDownload';

/** footer가 없는 페이지 목록 */
const NO_FOOTER_PAGES = ['/rookie/position', '/position/[id]', '/company/[id]'];

/** 아무것도 포함하지 않아야 하는 페이지 목록 */
const NO_LAYOUT_PAGES = ['/login'];

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  const { pathname } = useRouter();

  if (NO_LAYOUT_PAGES.includes(pathname)) {
    return <>{children}</>;
  }

  if (NO_FOOTER_PAGES.includes(pathname)) {
    return (
      <>
        <Header />
        <Block>{children}</Block>
        <AppDownload />
      </>
    );
  }

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
  height: 100%;
`;
