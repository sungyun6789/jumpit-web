import styled from '@emotion/styled';

const CareerBanner = () => {
  return (
    <Block>
      <BestWrap>
        <Best>🏅인기글</Best>
      </BestWrap>
    </Block>
  );
};

export default CareerBanner;

const Block = styled.div`
  position: relative;
  background: url('https://cdn.jumpit.co.kr/jumpit/qna/c_qna_banner.webp') 50% 50% / 1920px 100% no-repeat #0e0e0e;
  height: 260px;
  margin: 0px auto;
  width: 100%;

  @media (max-width: 1080px) {
    background: url('https://cdn.jumpit.co.kr/jumpit/qna/c_qna_banner_t.webp') center center / 768px 100% no-repeat
      #0e0e0e;
    height: 254px;
  }

  @media (max-width: 600px) {
    background: url('https://cdn.jumpit.co.kr/jumpit/qna/c_qna_banner_m.webp') center center / 360px 100% no-repeat
      #0e0e0e;
    height: 240px;
  }
`;

const BestWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Best = styled.h2`
  position: absolute;
  top: 120px;
  width: 1060px;
  overflow-y: hidden;

  color: #fff;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 12px;

  @media (max-width: 1080px) {
    width: calc(100% - 16px);
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
