import styled from '@emotion/styled';

const ThemeZipTitle = () => {
  return (
    <>
      <TitleWrap>
        <Title>테마별 모음.zip</Title>
        <SubTitle>내 취향에 맞게! 관심사에 맞게! 점핏에서 고른 테마별 핏한 포지션📌</SubTitle>
      </TitleWrap>
    </>
  );
};

export default ThemeZipTitle;

const TitleWrap = styled.section`
  max-width: 1080px;
  margin: 32px auto 40px;
  padding: 0 8px;

  @media (max-width: 1080px) {
    padding: 0 16px;
  }

  @media (max-width: 600px) {
    margin: 32px auto 14px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: -0.5px;
  color: #222;
`;

const SubTitle = styled.p`
  margin: 4px 0 0;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #666666;
`;
