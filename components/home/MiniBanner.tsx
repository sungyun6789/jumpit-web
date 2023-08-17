import styled from '@emotion/styled';

const MiniBanner = () => {
  return (
    <>
      <PCBanner />
      <MobileBannerBox>
        <MobileBanner />
      </MobileBannerBox>
    </>
  );
};

export default MiniBanner;

const PCBanner = styled.div`
  position: absolute;
  top: 160px;
  left: 50%;
  width: 100px;
  height: 148px;
  margin-left: 549px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const MobileBannerBox = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: inline-block;
    width: 100%;
    height: 84px;
  }
`;

const MobileBanner = styled.div`
  @media (max-width: 1080px) {
    width: calc(100% - 32px);
    height: 64px;
    margin: 10px auto;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
  }
`;
