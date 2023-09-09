import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { CDN_PATH } from '~/constants/path';
import { DesktopView, TabletView } from '~/styles/breakpoint';

const prefixPath = CDN_PATH + '/jumpit/personal/main_banner/';

const BANNERS = [
  {
    pcImage: 'event_qna2.webp',
    mobileImage: 'event_qna2_t.webp',
    url: '/event/career-qna',
    isNewTab: false,
  },
  {
    pcImage: 'awesome_resume_banner.webp',
    mobileImage: 'awesome_resume_banner_t.webp',
    url: '/event/awesome/resume',
    isNewTab: false,
  },
  {
    pcImage: 'event_for_develop_banner.png',
    mobileImage: 'event_for_develop_banner_t.png',
    url: '/event/for-develop',
    isNewTab: false,
  },
  {
    pcImage: 'kyobo_readITzine_seven.webp',
    mobileImage: 'kyobo_readITzine_seven_t.webp',
    url: 'https://event.kyobobook.co.kr/detail/208116',
    isNewTab: true,
  },
];

const MiniBanner = () => {
  return (
    <>
      <PCBanner>
        <StyledSlider autoplay speed={300} infinite dots dotsClass="dots_custom">
          {BANNERS.map((banner) => (
            <Link key={banner.url} href={banner.url} target={banner.isNewTab ? '_blank' : '_self'}>
              <Image src={prefixPath + banner.pcImage} width={100} height={148} alt="banner" />
            </Link>
          ))}
        </StyledSlider>
      </PCBanner>
      <MobileBannerBox>
        <StyledSlider autoplay speed={300} infinite dots dotsClass="dots_custom">
          {BANNERS.map((banner) => (
            <Link key={banner.url} href={banner.url} target={banner.isNewTab ? '_blank' : '_self'}>
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
  top: 160px;
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
    width: 39px;
    height: 15px;
    margin: 0 auto;
  }

  .dots_custom li {
    list-style: none;
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
