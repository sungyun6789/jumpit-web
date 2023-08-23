import styled from '@emotion/styled';
import { useContext, useRef, useState } from 'react';
import Slider from 'react-slick';
import { ThemeBannerContext } from '~/pages';

import Button from '../common/Button';

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
  const data = useContext(ThemeBannerContext);

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
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2450_17212)">
                <path
                  d="M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z"
                  stroke="#444444"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.0899 26.8394C22.7645 27.1649 22.2368 27.1649 21.9114 26.8394L15.6614 20.5894C15.336 20.264 15.336 19.7363 15.6614 19.4109L21.9114 13.1609C22.2368 12.8355 22.7645 12.8355 23.0899 13.1609C23.4153 13.4863 23.4153 14.014 23.0899 14.3394L17.4292 20.0002L23.0899 25.6609C23.4153 25.9863 23.4153 26.514 23.0899 26.8394Z"
                  fill="#444444"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2450_17212">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </ArrowButton>
          <ArrowButton disabled={(data?.length ?? 0) / 2 === currentIndex} onClick={next}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2450_17215)">
                <path
                  d="M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z"
                  stroke="#444444"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9111 13.1608C17.2365 12.8354 17.7641 12.8354 18.0896 13.1608L24.3396 19.4108C24.665 19.7363 24.665 20.2639 24.3396 20.5893L18.0896 26.8393C17.7641 27.1648 17.2365 27.1648 16.9111 26.8393C16.5856 26.5139 16.5856 25.9863 16.9111 25.6608L22.5718 20.0001L16.9111 14.3393C16.5856 14.0139 16.5856 13.4863 16.9111 13.1608Z"
                  fill="#444444"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2450_17215">
                  <rect width="40" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </ArrowButton>
        </ButtonBox>
      </TitleBox>

      {/** 실제 서비스와 동일하게 변경 필요 */}
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
