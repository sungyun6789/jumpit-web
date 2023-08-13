import styled from '@emotion/styled';

const PositionRecommend = () => {
  return (
    <Block>
      <Title>회원님을 위한 포지션을 보고싶다면?</Title>

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
    </Block>
  );
};

export default PositionRecommend;

const Block = styled.section`
  width: 1060px;
  margin: 64px auto 0;
`;

const Title = styled.h1`
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
`;
