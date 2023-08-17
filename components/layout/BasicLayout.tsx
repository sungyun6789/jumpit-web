import styled from '@emotion/styled';
import { TabletView } from '~/styles/breakpoint';

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
      <TabletView>
        <Notice />
      </TabletView>
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
