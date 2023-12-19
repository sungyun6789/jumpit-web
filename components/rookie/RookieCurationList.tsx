import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import Slider from 'react-slick';
import { reactSlickCustomArrowSettings } from '../common/ReactSlickCustomArrowSetting';
import PositionCardList from '../position/PositionCardList';
import type { Settings } from 'react-slick';
import type { PositionListResponse } from '~/pages/api/positions';

interface Curation {
  label: string;
  value: number | string;
}

const CURATIONS: Curation[] = [
  { label: '전체', value: '' },
  { label: '⌨️ Java로 웹개발', value: 1 },
  { label: '⚙️ Python으로 웹개발', value: 15 },
  { label: '🖥️ Javascript로 웹개발', value: 16 },
  { label: '📱 나도 할래 앱개발자', value: 4 },
  { label: '🚀 누적 투자금 100억↑ 스타트업', value: 18 },
  { label: '🏠 일하는 곳이 곧 회사', value: 6 },
  { label: '🧢 뭘입지 고민 NO, 자유복장', value: 7 },
];

const RookieCurationList = () => {
  const [selectedCuration, setSelectedCuration] = useState<Curation>(CURATIONS[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data } = useQuery(
    ['/positions', selectedCuration.value],
    async () => {
      const { data } = await axios.get<PositionListResponse>('/api/rookie/positions', {
        params: {
          curation: selectedCuration.value,
          size: 8,
        },
      });

      return data;
    },
    { select: (data) => data.result.positions.slice(0, 8) }
  );

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
        breakpoint: 601,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const title = selectedCuration.label
    .split(' ')
    .filter((value, index) => (value === '전체' ? value : index !== 0))
    .join(' ');

  return (
    <Block>
      <MaxWidthLayout>
        <Title>
          {title} <SubTitle>관련 포지션을 모아봤어요.</SubTitle>
        </Title>

        <StyledSlider {...settings} currentIndex={currentIndex}>
          {CURATIONS.map((curation) => (
            <Tag
              key={curation.label}
              isSelected={selectedCuration.label === curation.label}
              onClick={() => setSelectedCuration(curation)}
            >
              {curation.label}
            </Tag>
          ))}
        </StyledSlider>
      </MaxWidthLayout>

      <PositionCardListLayout>
        <PositionCardList data={data} />
      </PositionCardListLayout>

      <MaxWidthLayout>
        <MoreLink href="/rookie/position?curation=">더보기</MoreLink>
      </MaxWidthLayout>
    </Block>
  );
};

export default RookieCurationList;

const Block = styled.section`
  margin: 72px auto;

  @media (max-width: 1080px) {
    margin: 48px 0 60px;
  }

  @media (max-width: 1080px) {
    margin: 40px 0 56px;
  }
`;

const MaxWidthLayout = styled.div`
  margin: auto;
  max-width: 1060px;

  @media (max-width: 1080px) {
    margin: 0 16px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    display: block;
    font-size: 20px;
    line-height: 30px;
  }
`;

const Tag = styled.button<{ isSelected: boolean }>`
  padding: 0 16px;
  min-height: 40px;
  font-size: 15px;
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

    @media (max-width: 600px) {
      padding-bottom: 10px;
    }
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

const PositionCardListLayout = styled.div`
  /* 1080px 이하에서는 5,6,7,8번 index를 보여주지 않음 */
  @media (max-width: 1080px) {
    .item {
      :nth-child(n + 5):nth-child(-n + 8) {
        display: none;
      }
    }
  }
`;

const MoreLink = styled(Link)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 48px;
  border: 1px solid #000;
  border-radius: 100px;
  font-size: 15px;
  line-height: 24px;
  transition: border-color 0.4s ease 0s, background-color 0.4s ease 0s;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: #000;
    border-color: #fff;
  }

  @media (max-width: 600px) {
    width: 160px;
    height: 40px;
  }
`;
