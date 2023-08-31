import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { BENEFIT_TAG, TECH_CAREER_REGION_TAG } from '~/constants/position';
import useRepeatedQueryParamKeys from '~/hooks/useRepeatedQueryParamKeys';

import { NextArrowButton, PrevArrowButton } from '../common/ArrowButton';

import type { Settings } from 'react-slick';

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
  const { push } = useRepeatedQueryParamKeys();
  const [selectedBenefit, setSelectedBenefit] = useState<string[]>([]);

  const settings = {
    infinite: false,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
    if (selectedBenefit.includes(value)) {
      return setSelectedBenefit(selectedBenefit.filter((benefit) => benefit !== value));
    }

    setSelectedBenefit([...selectedBenefit, value]);
  };

  useEffect(() => {
    push('tag', selectedBenefit);
  }, [selectedBenefit]);

  return (
    <Block>
      <TagBlock>
        <TechCareerRegionTagList>
          {TECH_CAREER_REGION_TAG.map((tag) => (
            <TechCareerRegionTag key={tag}>
              <span>{tag}</span>
              <Image src="/bottomArrow.svg" width={16} height={16} alt="arrow" />
            </TechCareerRegionTag>
          ))}
        </TechCareerRegionTagList>

        <StyledSlider {...settings}>
          {BENEFIT_TAG.map((tag) => (
            <BenefitTag
              key={tag.value}
              onClick={() => onClickBenefitTag(tag.value)}
              isSelected={selectedBenefit.includes(tag.value)}
            >
              {tag.label}
            </BenefitTag>
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

  ${(props) =>
    props.isSelected && {
      fontWeight: '500',
    }}
`;