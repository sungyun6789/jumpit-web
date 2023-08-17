import styled from '@emotion/styled';

import Footer from '../base/Footer';
import Header from '../base/Header';
import Notice from '../home/Notice';

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Block>{children}</Block>
      <NoticeView>
        <Notice />
      </NoticeView>
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

const NoticeView = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
  }
`;
