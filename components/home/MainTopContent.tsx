import styled from '@emotion/styled';
import COLORS from '~/constants/colors';
import { mont } from '~/pages/_app';
import getDeviceType from '~/utils/getDeviceType';

import AuthProfile from '../auth/AuthProfile';

const MainTopContent = () => {
  const isDesktop = getDeviceType() === 'desktop';

  return isDesktop ? (
    <>
      <Block>
        <SlideBox />
        <div>
          <AuthProfile />

          <NoticeBox>
            <NoticeHeight>
              <NoticeTitle className={mont.className}>Notice</NoticeTitle>
              <NoticeList>
                <NoticeContent>[공지] 개인정보 처리방침 개정에 대해 안내드립니다.(20230822)</NoticeContent>
                <NoticeDate>2023-08</NoticeDate>
              </NoticeList>
            </NoticeHeight>
          </NoticeBox>
        </div>
      </Block>
    </>
  ) : (
    <SlideBox />
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

const NoticeBox = styled.div`
  width: 340px;
  padding: 20px 20px 26px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  margin-top: 20px;
`;

const NoticeHeight = styled.div`
  height: 50px;
`;

const NoticeTitle = styled.h1`
  color: ${COLORS.primary};
  font-size: 13px;
`;

const NoticeList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;

const NoticeContent = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  cursor: pointer;
`;

const NoticeDate = styled.span`
  color: #999999;
  font-size: 14px;
`;
