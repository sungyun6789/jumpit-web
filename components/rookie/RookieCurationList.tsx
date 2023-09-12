import styled from '@emotion/styled';
import { useState } from 'react';
import Slider from 'react-slick';

import { reactSlickCustomArrowSettings } from '../common/ReactSlickCustomArrowSetting';

import type { Settings } from 'react-slick';

const CURATIONS = [
  '전체',
  '⌨️ Java로 웹개발',
  '⚙️ Python으로 웹개발',
  '🖥️ Javascript로 웹개발',
  '📱 나도 할래 앱개발자',
  '🚀 누적 투자금 100억↑ 스타트업',
  '🏠 일하는 곳이 곧 회사',
  '🧢 뭘입지 고민 NO, 자유복장',
];

const RookieCurationList = () => {
  const [selectedCuration, setSelectedCuration] = useState('전체');
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings: Settings = {
    ...reactSlickCustomArrowSettings,
    infinite: false,
    slidesToScroll: 3,
    variableWidth: true,
    speed: 300,
    beforeChange: (value) => setCurrentIndex(value),
    afterChange: (value) => setCurrentIndex(value),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const title = selectedCuration
    .split(' ')
    .filter((value, index) => (value === '전체' ? value : index !== 0))
    .join(' ');

  return (
    <Block>
      <Title>{title} 관련 포지션을 모아봤어요.</Title>

      <StyledSlider {...settings} currentIndex={currentIndex}>
        {CURATIONS.map((curation) => (
          <Tag key={curation} isSelected={selectedCuration === curation} onClick={() => setSelectedCuration(curation)}>
            {curation}
          </Tag>
        ))}
      </StyledSlider>
    </Block>
  );
};

export default RookieCurationList;

const Block = styled.section`
  max-width: 1060px;
  margin: 72px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.5px;
`;

const Tag = styled.button<{ isSelected: boolean }>`
  padding: 0 16px;
  min-height: 40px;
  font-size: 15px;
  font-family: inherit;
  line-height: 22px;
  color: ${(props) => (props.isSelected ? '#7251f3' : '#444444')};
  background-color: #fff;
  border: ${(props) => (props.isSelected ? '1px solid #7251f3' : '1px solid #e4e4e4')};
  border-radius: 20px;
  cursor: pointer;

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
    }}
`;

const StyledSlider = styled(Slider)<{ currentIndex: number }>`
  .slick-list {
    margin: 10px 0 14px;
  }

  .slick-track {
    display: flex;
    gap: 8px;
  }

  .prev-arrow-overlay {
    display: ${(props) => (props.currentIndex === 0 ? 'none' : 'block')};
    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 50%);

    svg {
      fill: #fff;
    }
  }

  .next-arrow-overlay {
    display: ${(props) => (props.currentIndex === 3 ? 'none' : 'block')};
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 50%);

    svg {
      fill: #fff;
    }
  }
`;
