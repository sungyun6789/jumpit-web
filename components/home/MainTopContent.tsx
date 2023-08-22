import styled from '@emotion/styled';
import { DesktopView, TabletView } from '~/styles/breakpoint';

import AuthProfile from '../auth/AuthProfile';

import MainBanner from './MainBanner';
import Notice from './Notice';

const MainTopContent = () => {
  return (
    <>
      <DesktopView>
        <Block>
          <MainBanner />
          <div>
            <AuthProfile />
            <Notice />
          </div>
        </Block>
      </DesktopView>

      <TabletView>
        <MainBanner />
      </TabletView>
    </>
  );
};

export default MainTopContent;

const Block = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: 40px auto 0;
`;
