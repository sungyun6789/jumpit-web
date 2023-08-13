import styled from '@emotion/styled';

import Button from '../common/Button';

const ThemeZip = () => {
  return (
    <Block>
      <TitleBox>
        <Title>테마별 모음.zip</Title>

        <ButtonBox>
          <ArrowButton disabled>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </svg>
          </ArrowButton>
          <ArrowButton>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </svg>
          </ArrowButton>
        </ButtonBox>
      </TitleBox>

      <SwiperList>
        <SwiperItem />
        <SwiperItem />
      </SwiperList>
    </Block>
  );
};

export default ThemeZip;

const Block = styled.section`
  margin: 64px auto;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px 16px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const ButtonBox = styled.div`
  display: flex;
  height: 37px;
  gap: 6px;
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
    svg path:nth-child(1) {
      fill: transparent;
      stroke: #c4c4c4;
    }
    svg path:nth-child(2) {
      fill: #c4c4c4;
    }
  }

  :not(:disabled) {
    :hover {
      svg path:nth-child(1) {
        fill: #444444;
        stroke: #444444;
        stroke-width: 0;
      }
      svg path:nth-child(2) {
        fill: #fff;
        stroke: #fff;
        stroke-width: 0;
      }
    }
  }
`;

const SwiperList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const SwiperItem = styled.div`
  width: 520px;
  height: 140px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;
