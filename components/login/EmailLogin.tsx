import styled from '@emotion/styled';
import { useState } from 'react';
import COLORS from '~/constants/colors';

const EmailLogin = () => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <>
      <EmailLabel>이메일</EmailLabel>
      <Input placeholder="이메일을 입력해 주세요." />

      <Button disabled>점핏 시작하기</Button>

      <CheckboxBlock>
        {isCheck ? <Checkbox onClick={() => setIsCheck(false)} /> : <UnCheckbox onClick={() => setIsCheck(true)} />}
        <CheckboxLabel>자동 로그인</CheckboxLabel>
      </CheckboxBlock>
    </>
  );
};

export default EmailLogin;

const EmailLabel = styled.label`
  letter-spacing: -0.5px;
  color: #222;
`;

const Input = styled.input`
  margin-top: 7px;
  border-color: #222;
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  letter-spacing: -1px;

  :hover {
    border-color: #222;
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 0 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  height: 56px;
  min-width: 210px;
  border-radius: 8px;

  color: #fff;
  background-color: #000;

  :disabled {
    background-color: #c4c4c4;
  }
`;

const CheckboxBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 16px 0 40px;
`;

const UnCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border: 1.2px solid #d4d4d4;
  border-radius: 3.6px;
  outline: none;
  cursor: pointer;
`;

const Checkbox = styled.div`
  width: 24px;
  height: 24px;
  border: 1.2px solid ${COLORS.primary};
  border-radius: 3.6px;
  outline: none;
  background: url('https://www.jumpit.co.kr/assets/images/attach-checked.svg') center center no-repeat !important;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: #888888;
  font-size: 16px;
  letter-spacing: -0.5px;
`;
