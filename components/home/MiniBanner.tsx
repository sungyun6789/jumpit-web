import styled from '@emotion/styled';
import { DesktopView, TabletView } from '~/styles/breakpoint';

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

const PCBanner = styled(DesktopView)`
  position: absolute;
  top: 160px;
  left: 50%;
  width: 100px;
  height: 148px;
  margin-left: 549px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const MobileBannerBox = styled(TabletView)`
  @media (max-width: 1080px) {
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
