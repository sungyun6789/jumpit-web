import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useRef, useState } from 'react';
import Slider from 'react-slick';
import COLORS from '~/constants/colors';
import { RookieHomeResultContext } from '~/pages/rookie';

import { NextArrowButton, PrevArrowButton } from '../common/ArrowButton';
import Button from '../common/Button';

import type { Settings } from 'react-slick';

const SETTING: Settings = {
  rows: 2,
  infinite: false,
  arrows: false,
  slidesPerRow: 3,
};

const RookieFirstJob = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slickRef = useRef<Slider>(null);
  const data = useContext(RookieHomeResultContext);

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
      <Layout>
        <TitleContainer>
          <Title>우리가 도와줄게요, 첫 직장 구하기.</Title>

          <FlexBox>
            <AllLink href="/rookie/content">전체 보기</AllLink>
            <ButtonBox>
              <ArrowButton disabled={currentIndex === 1} onClick={prev}>
                <PrevArrowButton />
              </ArrowButton>
              <ArrowButton disabled={(data?.contents.length ?? 0) / 6 === currentIndex} onClick={next}>
                <NextArrowButton />
              </ArrowButton>
            </ButtonBox>
          </FlexBox>
        </TitleContainer>

        <StyledSlider {...SETTING} ref={slickRef}>
          {data?.contents.map((content) => (
            <Card key={content.id} onClick={() => window.open(content.url)}>
              {/* @todo: 임시 아이콘 사용, 실서비스와 동일한 이미지로 변경이 필요한데 api 응답과 이미지가 따로 관리되는 거 같아서 확인이 필요함 */}
              <Icon />
              <CardTitle>{content.title}</CardTitle>
              <TagBlock>
                {content.tags.map((tag) => (
                  <Tag key={tag.id}>{tag.name}</Tag>
                ))}
              </TagBlock>
              {/* @todo: 화살표 아이콘 추가 필요 */}
              <ReadDescription>읽어보기</ReadDescription>
            </Card>
          ))}
        </StyledSlider>
      </Layout>
    </Block>
  );
};

export default RookieFirstJob;

const Block = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f2f6ff;
`;

const Layout = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 64px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    div {
      display: flex;
    }
  }
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
    fill: none;
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
        stroke-width: 0;s
      }
    }
  }
`;

const Card = styled.div`
  margin-right: 14px;
  margin-bottom: 20px;
  box-sizing: content-box;
  width: 280px;
  height: 156px;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    h2,
    span {
      color: #7251f3;
    }

    span {
      text-decoration: underline;
    }
  }
`;

const AllLink = styled(Link)`
  text-decoration: underline;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #888888;
  font-size: 16px;
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${COLORS.primary};
`;

const CardTitle = styled.h2`
  width: 280px;
  margin-top: 27px;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -0.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TagBlock = styled.div`
  margin-top: 12px;
  max-height: 26px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
  gap: 6px;
`;

const Tag = styled.div`
  padding: 3px 8px;
  background-color: #f5f5f8;
  color: #666666;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.5px;
`;

const ReadDescription = styled.span`
  display: block;
  margin-top: 16px;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #7251f3;
`;
