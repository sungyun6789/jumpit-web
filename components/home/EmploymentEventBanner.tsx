import styled from '@emotion/styled';

import COLORS from '~/constants/colors';

const EmploymentEventBanner = () => {
  return (
    <Block>
      <Text>
        점핏에서 지원하고 합격하면 <Bold>취업축하금 70만원</Bold>
      </Text>
      <Text>을 드려요 💰</Text>
    </Block>
  );
};

export default EmploymentEventBanner;

const Block = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1060px;
  margin: 0px auto 100px;
  height: 100px;
  background-image: url('/employmentEventBanner.svg');
  background-color: ${COLORS.primary};
  border-radius: 8px;
`;

const Text = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.5px;
  color: #fff;
`;

const Bold = styled.b`
  display: inline-block;
  height: 30px;
  font-size: 24px;
  font-weight: 900;
  line-height: 27px;
  color: #fffc33;
  background-color: #000;
`;
