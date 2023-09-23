import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import { NextArrowButton, PrevArrowButton } from '../common/ArrowButton';
import Button from '../common/Button';

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

const ThemeZip = () => {
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

        <ButtonBox>
          <ArrowButton disabled={currentIndex === 1} onClick={prev}>
            <PrevArrowButton />
          </ArrowButton>
          <ArrowButton disabled={(data?.length ?? 0) / 2 === currentIndex} onClick={next}>
            <NextArrowButton />
          </ArrowButton>
        </ButtonBox>
      </TitleBox>

      {/** @todo 실제 서비스와 동일하게 변경 필요 */}
      <StyledSlider {...SETTING} ref={slickRef}>
        {data?.map((value) => (
          <Banner key={value.title} url={value.themeBanner.pc}>
            <BannerDescription>{value.title}</BannerDescription>
          </Banner>
        ))}
      </StyledSlider>
    </Block>
  );
};

export default ThemeZip;

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

const ArrowButton = styled(Button)`
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
