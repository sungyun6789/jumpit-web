import styled from '@emotion/styled';
import Link from 'next/link';
import COLORS from '~/constants/colors';

import Button from '../common/Button';

const JobDescriptionTopBanner = () => {
  return (
    <EventLink href="/contents/421">
      <Block>
        <PrimaryText>입사지원</PrimaryText>
        <Text>하고</Text>
        &nbsp;
        <PrimaryText>네이버 페이</PrimaryText>
        <Text>🎁 받자!</Text>
        <EventDetailButton>
          이벤트 자세히 보기
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" fill-rule="evenodd">
              <g>
                <g>
                  <g>
                    <g>
                      <path
                        d="M0 0H16V16H0z"
                        transform="translate(-316 -224) translate(20 216) translate(224) translate(72 8)"
                      ></path>
                      <path
                        stroke="#CCC"
                        stroke-width="1.2"
                        d="M3 6L8 11 13 6"
                        transform="translate(-316 -224) translate(20 216) translate(224) translate(72 8)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </EventDetailButton>
        <SkipButton>
          <SkipText>나중에 할게요</SkipText>
        </SkipButton>
      </Block>
    </EventLink>
  );
};

export default JobDescriptionTopBanner;

const EventLink = styled(Link)`
  background-color: #f5f5f8;
  color: #444444;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.span`
  display: block;
  font-size: 14px;
`;

const PrimaryText = styled(Text)`
  font-weight: bold;
  color: ${COLORS.primary};
`;

const EventDetailButton = styled(Button)`
  height: 20px;
  margin-left: 16px;
  color: ${COLORS.primary};
  font-weight: 500;
  font-size: 14px;
  font-family: inherit;
  position: relative;

  svg {
    position: absolute;
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
    right: -16px;

    path:nth-child(2) {
      stroke: #01d066;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const SkipButton = styled(Button)`
  position: absolute;
  top: 0px;
  right: 20px;
  font-family: inherit;

  ::after {
    content: '';
    background: url('https://www.jumpit.co.kr/App/build/static/media/top_banner_close.99b9ee8d.svg') center center /
      100% no-repeat;
    position: absolute;
    width: 17px;
    height: 15px;
    top: 2px;
    right: -20px;
  }

  @media (max-width: 1080px) {
    ::after {
      top: 0;
      right: 0;
    }
  }
`;

const SkipText = styled.span`
  font-size: 12px;
  color: #999999;

  @media (max-width: 1080px) {
    display: none;
  }
`;
