import styled from '@emotion/styled';
import { DesktopView, TabletView } from '~/styles/breakpoint';

import AuthProfile from '../auth/AuthProfile';

import Notice from './Notice';

const MainTopContent = () => {
  return (
    <>
      <DesktopView>
        <Block>
          <SlideBox />
          <div>
            <AuthProfile />
            <Notice />
          </div>
        </Block>
      </DesktopView>

      <TabletView>
        <SlideBox />
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

const SlideBox = styled.div`
  width: 700px;
  height: 340px;
  background-color: #e4e4e4;
  border-radius: 4px;

  @media (max-width: 1080px) {
    width: 100%;
    height: 300px;
    border-radius: 0;
  }

  @media (max-width: 600px) {
    height: 252px;
  }
`;
