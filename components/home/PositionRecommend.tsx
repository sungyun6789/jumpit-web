import styled from '@emotion/styled';
import Image from 'next/image';

import Button from '../common/Button';

import COLORS from '~/constants/colors';

const LIST = [1, 2, 3, 4, 5, 6, 7, 8];

const PositionRecommend = () => {
  const isLogin = true;

  return isLogin ? (
    <Block>
      <TitleBox>
        <Title>
          <ThumbsUpBox>
            <Image src="/thumbsUpIcon.svg" width={16} height={16} alt="" />
          </ThumbsUpBox>
          박성윤님을 위한 추천!
        </Title>
        <RecommendAlarmButton>
          <Image src="/alarmIcon.svg" width={18} height={18} alt="recommend alarm" />
          추천 알림 받기
        </RecommendAlarmButton>
      </TitleBox>

      <RecommendList>
        {LIST.map((value) => (
          <RecommendItem key={value}>
            <RecommendBanner />
            <RecommendDescriptionBox>
              <RecommendCompanyName>회사 이름 {value}</RecommendCompanyName>
              <RecommendTitle>공고 제목 {value}</RecommendTitle>
              <RecommendTechStack>기술 스택 {value}</RecommendTechStack>
              <RecommendLocationBox>
                <RecommendLocation>지역</RecommendLocation>
                <RecommendLocation>경력</RecommendLocation>
              </RecommendLocationBox>
            </RecommendDescriptionBox>
          </RecommendItem>
        ))}
      </RecommendList>
    </Block>
  ) : (
    <UnLoginBlock>
      <UnLoginTitle>회원님을 위한 포지션을 보고싶다면?</UnLoginTitle>

      <PositionRecommendBox>
        <PositionRecommendIconTextContainer>
          <Icon>🖐</Icon>
          <PositionRecommendText>3초만에 회원가입/로그인하고 취향저격 포지션을 추천 받아보세요!</PositionRecommendText>
        </PositionRecommendIconTextContainer>

        <LoginText>
          회원가입/로그인
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M1.33325 10.6668L5.99992 6.00016L1.33325 1.3335" stroke="#C4C4C4" stroke-width="1.2" />
          </svg>
        </LoginText>
      </PositionRecommendBox>
    </UnLoginBlock>
  );
};

export default PositionRecommend;

const UnLoginBlock = styled.section`
  width: 1060px;
  margin: 64px auto 0;
`;

const UnLoginTitle = styled.h1`
  font-size: 24px;
  color: #222222;
`;

const PositionRecommendBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  margin-top: 16px;
  padding: 0px 26px 0px 20px;
  background-color: #f5f5f8;
  border-radius: 4px;
  letter-spacing: -0.5px;
`;

const Icon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: #fff;
  border-radius: 100%;
`;

const PositionRecommendIconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PositionRecommendText = styled.p`
  line-height: 20px;
  font-weight: 500;
  color: #222222;
`;

const LoginText = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  line-height: 20px;
  color: #777777;
  white-space: pre;
  cursor: pointer;
`;

const Block = styled.section`
  width: 100%;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  background-color: #f5fcfa;
  padding-top: 48px;
  padding-bottom: 18px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: auto;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  line-height: 40px;
`;

const ThumbsUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #00dd6d;
  border-radius: 100%;
`;

const RecommendAlarmButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 14px;
  line-height: 38px;
  color: #fff;
  padding: 0 16px;
  border-radius: 100px;
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
`;

const RecommendList = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const RecommendItem = styled.div`
  width: calc(25% -20px);
  max-width: 270px;
  padding: 10px;
  cursor: pointer;

  :hover {
    h2 {
      text-decoration: underline;
    }
  }
`;

const RecommendDescriptionBox = styled.div`
  padding: 12px 0px 36px;
`;

const RecommendBanner = styled.div`
  width: 256px;
  height: 166px;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

const RecommendCompanyName = styled.span`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #444444;
`;

const RecommendTitle = styled.h2`
  margin-top: 6px;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.4em;
`;

const RecommendTechStack = styled.p`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #999999;
  margin-top: 8px;
`;

const RecommendLocationBox = styled.div`
  display: flex;
  gap: 10px;
`;

const RecommendLocation = styled(RecommendTechStack)`
  margin-top: 4px;
`;
