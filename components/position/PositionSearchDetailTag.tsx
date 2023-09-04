import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Slider from 'react-slick';
import { BENEFIT_TAG, TECH_CAREER_REGION_TAG } from '~/constants/position';
import usePositionQueryPush from '~/hooks/usePositionQueryPush';

import { NextArrowButton, PrevArrowButton } from '../common/ArrowButton';

import type { Settings } from 'react-slick';

const PrevArrow = (props: Settings) => {
  return (
    <ArrowButtonOverlay type="prev" className="prev-arrow-overlay">
      <ArrowButtonWrapper type="prev">
        <PrevArrowButton {...props} />
      </ArrowButtonWrapper>
    </ArrowButtonOverlay>
  );
};

const NextArrow = (props: Settings) => {
  return (
    <ArrowButtonOverlay type="next" className="next-arrow-overlay">
      <ArrowButtonWrapper type="next">
        <NextArrowButton {...props} />
      </ArrowButtonWrapper>
    </ArrowButtonOverlay>
  );
};

const PositionSearchDetailTag = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { query } = useRouter();
  const { push } = usePositionQueryPush();
  const selectedBenefits = query.tag ? (typeof query.tag === 'string' ? [query.tag] : (query.tag as string[])) : [];

  const settings: Settings = {
    infinite: false,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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

  const onClickBenefitTag = (value: string) => {
    if (selectedBenefits.includes(value)) {
      const benefits = selectedBenefits.filter((benefit) => benefit !== value);
      return push('tag', benefits);
    }

    const benefits = [...selectedBenefits, value];
    return push('tag', benefits);
  };

  return (
    <Block>
      <TagBlock>
        {/** @todo select 구현 */}
        <TechCareerRegionTagList>
          {TECH_CAREER_REGION_TAG.map((tag) => (
            <TechCareerRegionTag key={tag}>
              <span>{tag}</span>
              <Image src="/bottomArrow.svg" width={16} height={16} alt="arrow" />
            </TechCareerRegionTag>
          ))}
        </TechCareerRegionTagList>

        <StyledSlider {...settings} currentIndex={currentIndex}>
          {BENEFIT_TAG.map((tag) => (
            <BenefitTag
              key={tag.value}
              onClick={() => onClickBenefitTag(tag.value)}
              isSelected={selectedBenefits.includes(tag.value)}
            >
              {tag.label}
            </BenefitTag>
          ))}
        </StyledSlider>
      </TagBlock>
    </Block>
  );
};

export default PositionSearchDetailTag;

const Block = styled.section`
  @media (max-width: 1080px) {
    padding-top: 8px;
  }
`;

const TagBlock = styled.div`
  max-width: 1060px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    white-space: nowrap;
    margin: 12px 16px 0;
    gap: 12px;
  }
`;

const TechCareerRegionTagList = styled.div`
  display: flex;
  gap: 8px;
`;

const TechCareerRegionTag = styled.button`
  display: flex;
  gap: 2px;
  align-items: center;
  position: relative;
  padding: 6px 12px 7px 12px;
  border: 1px solid #e4e4e4;
  border-radius: 100px;
  background-color: #fff;
  cursor: pointer;
  font-family: inherit;

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
  left: ${(props) => props.type === 'prev' && 0};
  right: ${(props) => props.type === 'next' && '-12px'};
  display: flex;
  align-items: center;
  width: 80px;
  height: 40px;
  z-index: 2;
  background-image: ${(props) =>
    `linear-gradient(${props.type === 'prev' ? '270deg' : '90deg'}, rgba(255, 255, 255, 0), rgb(247, 247, 247) 50%)`};

  @media (max-width: 1080px) {
    width: 96px;
    right: ${(props) => props.type === 'next' && '-1px'};
  }
`;

const ArrowButtonWrapper = styled.div<{ type: 'prev' | 'next' }>`
  padding: 7px 16px;

  svg {
    position: absolute;
    width: 32px;
    height: 32px;
    cursor: pointer;
    z-index: 1;

    ${(props) => (props.type === 'prev' ? { left: 0 } : { right: '12px' })}

    :hover {
      path:nth-of-type(1) {
        fill: #444444;
      }

      path:nth-of-type(2) {
        fill: #fff;
      }
    }
  }
`;

const StyledSlider = styled(Slider)<{ currentIndex: number }>`
  .slick-track {
    display: flex;
    gap: 8px;
  }

  .prev-arrow-overlay {
    display: ${(props) => (props.currentIndex === 0 ? 'none' : 'block')};
  }

  .next-arrow-overlay {
    display: ${(props) => (props.currentIndex === 15 ? 'none' : 'block')};
  }
`;

const BenefitTag = styled.button<{ isSelected: boolean }>`
  letter-spacing: -0.5px;
  border-radius: 20px;
  padding: 7px 16px;
  background-color: ${(props) => (props.isSelected ? '#3d3d3d' : '#eeeeee')};
  font-size: 15px;
  line-height: 24px;
  border: 1px solid #e4e4e4;
  color: ${(props) => (props.isSelected ? '#fff' : '#222222')};
  cursor: pointer;
  font-family: inherit;

  ${(props) =>
    props.isSelected && {
      fontWeight: '500',
    }}
`;
