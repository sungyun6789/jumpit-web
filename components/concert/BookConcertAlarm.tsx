import styled from '@emotion/styled';

import Button from '../common/Button';

/**
 * @todo 로그인 기능 추가할 때 알림 기능 추가
 */
const BookConcertAlarm = () => {
  return (
    <Block>
      <DescriptionTerm>라이브 놓칠 수 없다!</DescriptionTerm>
      <DefinitionDescription>
        마케팅 정보 수신 동의하고,
        <br /> 사전신청 알림 받으세요
      </DefinitionDescription>
      <AlarmButton>🔔 알림 설정하기</AlarmButton>
    </Block>
  );
};

export default BookConcertAlarm;

const Block = styled.section`
  margin-top: 100px;
  padding: 60px 0;
  background-color: #225cec;
  text-align: center;

  @media (max-width: 1080px) {
    padding: 80px 0;
  }

  @media (max-width: 600px) {
    margin-top: 60px;
  }
`;

const DescriptionTerm = styled.dt`
  color: #d5dff8;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const DefinitionDescription = styled.dd`
  color: #fff;
  margin-top: 8px;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.5px;

  br {
    display: none;
  }

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 36px;

    br {
      display: block;
    }
  }
`;

const AlarmButton = styled(Button)`
  margin-top: 32px;
  width: 260px;
  height: 56px;
  background-color: #fff;
  color: #333333;
  font-weight: 700;
  line-height: 24px;
  font-size: 20px;
  border-radius: 100px;
`;
