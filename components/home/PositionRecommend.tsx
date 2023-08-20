import styled from '@emotion/styled';
import Image from 'next/image';
import { useContext } from 'react';
import COLORS from '~/constants/colors';
import { HomeDataContext } from '~/pages';

import Button from '../common/Button';
import PositionCardList from '../common/PositionCardList';

const PositionRecommend = () => {
  const data = useContext(HomeDataContext);
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
        </RecommendAlarmButton>
      </TitleBox>

      <PositionCardList data={data?.newlyPositions.positions} />
    </Block>
  ) : (
    <UnLoginBlock>
      <UnLoginTitle>회원님을 위한 포지션을 보고싶다면?</UnLoginTitle>

      <PositionRecommendBox>
        <PositionRecommendIconTextContainer>
          <Icon>🖐</Icon>
          <PositionRecommendText>
            <BreakTag>3초만에 회원가입/로그인하고 </BreakTag>
            취향저격 포지션을 추천 받아보세요!
          </PositionRecommendText>
        </PositionRecommendIconTextContainer>

        <LoginText>
          회원가입/로그인
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M1.33325 10.6668L5.99992 6.00016L1.33325 1.3335" stroke="#C4C4C4" strokeWidth="1.2" />
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

  @media (max-width: 1080px) {
    width: auto;
    margin: 40px 16px 0px;
  }

  @media (max-width: 600px) {
    margin: 40px 16px 0px;
  }
`;

const UnLoginTitle = styled.h1`
  font-size: 24px;
  color: #222222;

  @media (max-width: 600px) {
    font-size: 20px;
  }
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

  @media (max-width: 600px) {
    display: block;
    padding: 20px 16px;
    height: 100%;
  }
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

const BreakTag = styled.span`
  @media (max-width: 600px) {
    display: block;
  }
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

  @media (max-width: 600px) {
    margin-left: 44px;
    margin-top: 8px;
  }
`;

const Block = styled.section`
  width: 100%;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  background-color: #f5fcfa;
  padding-top: 48px;
  padding-bottom: 18px;

  @media (max-width: 1080px) {
    padding-top: 40px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: auto;

  @media (max-width: 1080px) {
    padding: 0 15px;
  }

  @media (max-width: 600px) {
    padding: 0 18px;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  line-height: 40px;

  @media (max-width: 1080px) {
    letter-spacing: -0.5px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const ThumbsUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #00dd6d;
  border-radius: 100%;

  @media (max-width: 600px) {
    width: 24px;
    height: 24px;
    padding: 3px;

    img {
      width: 12px;
      height: 12px;
    }
  }
`;

const RecommendAlarmButton = styled(Button)`
  width: 129.05px;
  height: 40px;
  margin-top: 4.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 13px;
  line-height: 38px;
  color: #fff;
  padding: 0 16px;
  border-radius: 100px;
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  ::after {
    content: '추천 알림 받기';
    font-size: 13px;
  }

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    padding: 0;

    ::after {
      content: none;
    }
  }
`;
