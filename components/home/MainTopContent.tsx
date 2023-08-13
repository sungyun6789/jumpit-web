import styled from '@emotion/styled';
import Image from 'next/image';

import COLORS from '~/constants/colors';
import { mont } from '~/pages/_app';

const SOCIALS = ['naver', 'google', 'github', 'apple'];

const MainTopContent = () => {
  return (
    <>
      <Block>
        <SlideBox />
        <div>
          <AuthBox>
            <AuthBoxContent>
              <AuthDescription>회원가입/로그인하고</AuthDescription>
              <AuthDescription>점핏의 다양한 혜택을 만나보세요.</AuthDescription>

              <AuthButton>회원가입 / 로그인</AuthButton>

              <SNSBox>
                <SNSTitle>SNS로 3초만에 로그인</SNSTitle>
                {SOCIALS.map((social) => (
                  <SNSButton key={social} type="button">
                    <Image src={social + 'Logo.svg'} width={32} height={44} alt={social + 'login'} />
                  </SNSButton>
                ))}
              </SNSBox>
            </AuthBoxContent>
          </AuthBox>
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
      <MiniSlide />
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
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const AuthBox = styled.div`
  width: 340px;
  padding: 32px 20px 20px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const AuthBoxContent = styled.div`
  height: 168px;
`;

const AuthDescription = styled.p`
  font-size: 17px;
  color: #222222;
  margin-bottom: 5px;
`;

const AuthButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 15px;
  color: #fff;
  line-height: 46px;
  border: 1px solid #000;
  border-radius: 3px;
  background-color: #000;
  cursor: pointer;
`;

const SNSBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const SNSTitle = styled.h2`
  color: #666666;
  font-size: 14px;
  font-weight: 500;
`;

const SNSButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const MiniSlide = styled.div`
  position: absolute;
  top: 160px;
  left: 50%;
  width: 100px;
  height: 148px;
  margin-left: 549px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
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
