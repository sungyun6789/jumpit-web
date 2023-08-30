import styled from '@emotion/styled';
import Image from 'next/image';
import Slider from 'react-slick';

import { NextArrowButton, PrevArrowButton } from '../common/ArrowButton';

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
    <ArrowButtonOverlay type="prev">
      <ArrowButtonWrapper type="prev">
        <PrevArrowButton {...props} />
      </ArrowButtonWrapper>
    </ArrowButtonOverlay>
  );
};

const NextArrow = (props: Settings) => {
  return (
    <ArrowButtonOverlay type="next">
      <ArrowButtonWrapper type="next">
        <NextArrowButton {...props} />
      </ArrowButtonWrapper>
    </ArrowButtonOverlay>
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

const ArrowButtonOverlay = styled.div<{ type: 'prev' | 'next' }>`
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

const ArrowButtonWrapper = styled.div<{ type: 'prev' | 'next' }>`
  svg {
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
