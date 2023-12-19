import styled from '@emotion/styled';
import { NextArrowButton, PrevArrowButton } from './ArrowButton';
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

export const reactSlickCustomArrowSettings: Settings = {
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

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
