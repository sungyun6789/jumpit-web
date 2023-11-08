import styled from '@emotion/styled';
import Link from 'next/link';
import { useContext, useRef } from 'react';
import React from 'react';
import Slider from 'react-slick';
import { HomeDataContext } from '~/context/HomeDataProvier';

const MainBanner = () => {
  const slickRef = useRef<Slider>(null);
  const data = useContext(HomeDataContext);

  const prev = () => slickRef.current?.slickPrev();
  const next = () => slickRef.current?.slickNext();

  return (
    <Block>
      <StyledSlider speed={300} autoplay ref={slickRef}>
        {data?.mainBanners.map((banner) => (
          <Link key={banner.bannerId} href={banner.link}>
            <Banner url={banner.imagePath}>
              <BannerDescription>
                {banner.title}
                <br />
                {banner.contents}
              </BannerDescription>
            </Banner>
          </Link>
        ))}
      </StyledSlider>

      <LeftArrowButton onClick={prev} />
      <RightArrowButton onClick={next} />
    </Block>
  );
};

export default MainBanner;

const StyledSlider = styled(Slider)`
  width: 700px;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const Block = styled.div`
  position: relative;
`;

const ArrowButton = styled.button`
  display: block;
  position: absolute;
  bottom: 40px;
  width: 40px;
  height: 40px;

  :focus {
    outline: none;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 50px;
  background-image: url(https://www.jumpit.co.kr/App/build/static/media/btn-prev.85cf9174.svg);

  :hover {
    background-image: url(https://www.jumpit.co.kr/App/build/static/media/btn-prev-hover.9185b56c.svg);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const RightArrowButton = styled(ArrowButton)`
  left: 110px;
  background-image: url(https://www.jumpit.co.kr/App/build/static/media/btn-next.6acd9890.svg);

  :hover {
    background-image: url(https://www.jumpit.co.kr/App/build/static/media/btn-next-hover.ed6f22cf.svg);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const Banner = styled.div<{ url: string }>`
  position: relative;
  width: 100%;
  height: 340px;
  border-radius: 4px;
  background: url(${(props) => props.url}) center center / cover no-repeat;
  cursor: pointer;

  @media (max-width: 1080px) {
    height: 300px;
    border-radius: 0;
  }

  @media (max-width: 600px) {
    height: 252px;
  }
`;

const BannerDescription = styled.h1`
  max-width: 600px;
  position: absolute;
  bottom: 110px;
  left: 50px;
  color: #fff;
  font-size: 32px;
  line-height: 45px;

  @media (max-width: 1080px) {
    max-width: 90%;
    bottom: 100px;
    font-size: 28px;
    line-height: 40px;
  }

  @media (max-width: 600px) {
    bottom: 32px;
    left: 32px;
    font-size: 24px;
    line-height: 30px;
  }
`;
