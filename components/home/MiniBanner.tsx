import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { CDN_PATH } from '~/constants/path';
import { DesktopView, TabletView } from '~/styles/breakpoint';

const prefixPath = CDN_PATH + '/jumpit/personal/main_banner/';

/** 마지막 업데이트 23.10.14 */
const BANNERS = [
  {
    pcImage: 'event_apply.webp',
    mobileImage: 'event_apply_m.webp',
    tabletImage: 'event_apply_t.webp',
    link: '/contents/421',
    isNewTab: false,
  },
  {
    pcImage: 'event_for_develop_banner.png',
    mobileImage: 'event_for_develop_banner_m.png',
    tabletImage: 'event_for_develop_banner_t.png',
    link: '/event/for-develop',
    isNewTab: false,
  },
];

const MiniBanner = () => {
  return (
    <>
      <PCBanner>
        <StyledSlider autoplay speed={300} infinite dots dotsClass="dots_custom">
          {BANNERS.map((banner) => (
            <Link key={banner.link} href={banner.link} target={banner.isNewTab ? '_blank' : '_self'}>
              <Image src={prefixPath + banner.pcImage} width={100} height={148} alt="banner" />
            </Link>
          ))}
        </StyledSlider>
      </PCBanner>
      <MobileBannerBox>
        <StyledSlider autoplay speed={300} infinite dots dotsClass="dots_custom">
          {BANNERS.map((banner) => (
            <Link key={banner.link} href={banner.link} target={banner.isNewTab ? '_blank' : '_self'}>
              <MobileBanner url={prefixPath + banner.mobileImage} />
            </Link>
          ))}
        </StyledSlider>
      </MobileBannerBox>
    </>
  );
};

export default MiniBanner;

const PCBanner = styled(DesktopView)`
  position: absolute;
  top: 40px;
  left: 50%;
  width: 100px;
  height: 148px;
  margin-left: 549px;
  border-radius: 4px;
`;

const MobileBannerBox = styled(TabletView)`
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const MobileBanner = styled.div<{ url: string }>`
  @media (max-width: 1080px) {
    width: calc(100% - 32px);
    height: 64px;
    margin: 10px auto;
    border-radius: 4px;
    background: url(${(props) => props.url}) 0% 0% / 100% 64px no-repeat;
  }
`;

const StyledSlider = styled(Slider)`
  .dots_custom {
    display: flex !important;
    justify-content: space-around;
    align-items: flex-end;
    width: 19px;
    height: 15px;
    margin: 0 auto;
  }

  .dots_custom li {
    cursor: pointer;
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: #d4d4d4;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 5px;
    width: 5px;
    border-radius: 100%;
  }

  .dots_custom li.slick-active button {
    background-color: #888888;
  }
`;
