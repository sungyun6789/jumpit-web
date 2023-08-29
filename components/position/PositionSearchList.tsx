import styled from '@emotion/styled';
import Image from 'next/image';
import Slider from 'react-slick';

import type { Settings } from 'react-slick';

const POSITION_TAG = ['기술스택', '경력', '지역'];
const BENEFIT_TAG = [
  '🍯 4.5일제',
  '🏠 재택근무',
  '⏰ 유연근무제',
  '🕙 시차출근제',
  '💸 내일채움공제',
  '💵 인센티브',
  '👾 코드리뷰',
  '👖 반바지/슬리퍼 OK',
  '👕 자유복장',
  '☕ 맛있는간식냠냠',
  '💻 맥북으로개발',
  '👩‍ 닉네임사용',
  '🙌 수평적조직',
  '🐶 반려동물',
  '💰 누적투자금100억이상',
  '📈 스톡옵션제공',
  '📗 도서구입비지원',
  '🚕 택시비지원',
  '👨 병역특례',
  '🎓 전공우대',
];

const PrevArrow = (props: Settings) => {
  return (
    <ArrowButtonWrapper type="prev">
      <ArrowButtonSvg
        type="prev"
        {...props}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="#f7f7f7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2450_17212)">
          <path
            d="M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z"
            stroke="#444444"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.0899 26.8394C22.7645 27.1649 22.2368 27.1649 21.9114 26.8394L15.6614 20.5894C15.336 20.264 15.336 19.7363 15.6614 19.4109L21.9114 13.1609C22.2368 12.8355 22.7645 12.8355 23.0899 13.1609C23.4153 13.4863 23.4153 14.014 23.0899 14.3394L17.4292 20.0002L23.0899 25.6609C23.4153 25.9863 23.4153 26.514 23.0899 26.8394Z"
            fill="#444444"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_2450_17212">
            <rect width="40" height="40" fill="white"></rect>
          </clipPath>
        </defs>
      </ArrowButtonSvg>
    </ArrowButtonWrapper>
  );
};

const NextArrow = (props: Settings) => {
  return (
    <ArrowButtonWrapper type="next">
      <ArrowButtonSvg
        type="next"
        {...props}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="#f7f7f7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2450_17215)">
          <path
            d="M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z"
            stroke="#444444"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.9111 13.1608C17.2365 12.8354 17.7641 12.8354 18.0896 13.1608L24.3396 19.4108C24.665 19.7363 24.665 20.2639 24.3396 20.5893L18.0896 26.8393C17.7641 27.1648 17.2365 27.1648 16.9111 26.8393C16.5856 26.5139 16.5856 25.9863 16.9111 25.6608L22.5718 20.0001L16.9111 14.3393C16.5856 14.0139 16.5856 13.4863 16.9111 13.1608Z"
            fill="#444444"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_2450_17215">
            <rect width="40" height="40" fill="white"></rect>
          </clipPath>
        </defs>
      </ArrowButtonSvg>
    </ArrowButtonWrapper>
  );
};

const PositionSearchList = () => {
  const settings = {
    infinite: false,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Block>
      <TagBlock>
        <PositionTagList>
          {POSITION_TAG.map((tag) => (
            <PositionTag key={tag}>
              <span>{tag}</span>
              <Image src="/bottomArrow.svg" width={16} height={16} alt="arrow" />
            </PositionTag>
          ))}
        </PositionTagList>

        <StyledSlider {...settings}>
          {BENEFIT_TAG.map((tag) => (
            <BenefitTag key={tag}>{tag}</BenefitTag>
          ))}
        </StyledSlider>
      </TagBlock>
    </Block>
  );
};

export default PositionSearchList;

const Block = styled.section`
  padding: 40px 0 80px 0;
  background-color: #f7f7f7;
`;

const TagBlock = styled.div`
  max-width: 1060px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

const PositionTagList = styled.div`
  display: flex;
  gap: 8px;
`;

const PositionTag = styled.button`
  display: flex;
  gap: 2px;
  align-items: center;
  position: relative;
  padding: 6px 12px 7px 12px;
  border: 1px solid #e4e4e4;
  border-radius: 100px;
  background-color: #fff;
  cursor: pointer;

  :hover {
    border: 1px solid #000;
  }

  span {
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: #222222;
  }
`;

const ArrowButtonWrapper = styled.div<{ type: 'prev' | 'next' }>`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 80px;
  height: 40px;
  z-index: 2;

  ${(props) =>
    props.type === 'prev'
      ? {
          left: 0,
          backgroundImage: 'linear-gradient(270deg, rgba(255, 255, 255, 0), rgb(247, 247, 247) 50%)',
        }
      : {
          right: '-12px',
          backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(247, 247, 247) 50%)',
        }}
`;

const ArrowButtonSvg = styled.svg<{ type: 'prev' | 'next' }>`
  position: absolute;
  right: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 1;

  ${(props) => (props.type === 'prev' ? { left: 0 } : { right: 0 })}

  :hover {
    path:nth-child(1) {
      fill: #444444;
    }

    path:nth-child(2) {
      fill: #fff;
    }
  }
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    gap: 8px;
  }
`;

const BenefitTag = styled.button`
  letter-spacing: -0.5px;
  border-radius: 20px;
  padding: 7px 16px;
  background-color: #eeeeee;
  font-size: 15px;
  line-height: 24px;
  border: 1px solid #e4e4e4;
  color: #222222;
  cursor: pointer;
`;
