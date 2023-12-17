import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import { PrevArrowButton } from '../common/ArrowButton';

import type { ThemeBannerResponse } from '~/pages/api/themes/banners/home';

const SETTING = {
  slidesToScroll: 2,
  slidesToShow: 2,
  speed: 500,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ],
};

const HomeThemeZip = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slickRef = useRef<Slider>(null);

  const { data } = useQuery(['/api/themes/banners/home'], async () => {
    const { data } = await axios.get<ThemeBannerResponse>('/api/themes/banners/home');
    return data.result;
  });

  const prev = () => {
    slickRef.current?.slickPrev();
    setCurrentIndex(currentIndex - 1);
  };

  const next = () => {
    slickRef.current?.slickNext();
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <Block>
      <TitleBox>
        <Title>테마별 모음.zip</Title>

        <FlexBox>
          <AllLink href="/theme">전체 보기</AllLink>

          <ButtonBox>
            <ArrowButton disabled={currentIndex === 1} onClick={prev}>
              <PrevArrowButton />
            </ArrowButton>
            <ArrowButton disabled={(data?.length ?? 0) / 2 === currentIndex} onClick={next}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                <g clipPath="url(#a)">
                  <path
                    stroke="#444"
                    d="M39.5 20c0 10.77-8.73 19.5-19.5 19.5S.5 30.77.5 20 9.23.5 20 .5 39.5 9.23 39.5 20Z"
                  ></path>
                  <path
                    fill="#444"
                    fillRule="evenodd"
                    d="M16.911 13.16a.833.833 0 0 1 1.179 0l6.25 6.25a.833.833 0 0 1 0 1.18l-6.25 6.25a.833.833 0 1 1-1.179-1.18l5.66-5.66-5.66-5.66a.833.833 0 0 1 0-1.18Z"
                    clipRule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h40v40H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </ArrowButton>
          </ButtonBox>
        </FlexBox>
      </TitleBox>

      {/** @todo 실제 서비스와 동일하게 변경 필요 */}
      <StyledSlider {...SETTING} ref={slickRef}>
        {data?.map((value) => (
          <Link key={value.title} href={'/theme/' + value.theme}>
            <Banner url={value.themeBanner.pc}>
              <BannerDescription>{value.title}</BannerDescription>
            </Banner>
          </Link>
        ))}
      </StyledSlider>
    </Block>
  );
};

export default HomeThemeZip;

const StyledSlider = styled(Slider)`
  .slick-slide {
    div {
      display: flex;
      margin: auto;
    }
  }
`;

const Block = styled.section`
  max-width: 1080px;
  margin: 64px auto;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: unset;
    margin: 40px auto;
    padding: 0 8px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px 16px;

  @media (max-width: 1080px) {
    margin: 0px 8px 16px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
`;

const ButtonBox = styled.div`
  display: flex;
  height: 37px;
  gap: 6px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ArrowButton = styled.button`
  padding: 0.3px;
  font-size: inherit;

  svg {
    width: 32px;
    height: 32px;
  }

  :disabled {
    cursor: default;
    svg path:nth-of-type(1) {
      fill: transparent;
      stroke: #c4c4c4;
    }
    svg path:nth-of-type(2) {
      fill: #c4c4c4;
    }
  }

  :not(:disabled) {
    :hover {
      svg path:nth-of-type(1) {
        fill: #444444;
        stroke: #444444;
        stroke-width: 0;
      }
      svg path:nth-of-type(2) {
        fill: #fff;
        stroke: #fff;
        stroke-width: 0;
      }
    }
  }
`;

const Banner = styled.div<{ url: string }>`
  position: relative;
  width: 520px !important;
  height: 140px;
  background: url(${(props) => props.url}) center center / cover no-repeat;
  cursor: pointer;
`;

const BannerDescription = styled.span`
  position: absolute;
  top: 30px;
  left: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000;
  white-space: pre-wrap;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const AllLink = styled(Link)`
  text-decoration: underline;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #888888;
  margin-right: 12px;
  font-size: 16px;

  @media (max-width: 1080px) {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    margin-right: 0;
  }
`;
