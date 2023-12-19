import { css } from '@emotion/react';
import styled from '@emotion/styled';
import EmailLogin from './EmailLogin';
import SocialLogin from './SocialLogin';

const Login = () => {
  return (
    <Block>
      <Title>
        반가워요
        <br />
        <Strong>점핏에서 커리어 점프해요!</Strong>
      </Title>

      <Form>
        <EmailLogin />
        <SocialLogin />
      </Form>
    </Block>
  );
};

export default Login;

const Block = styled.main`
  margin-top: 60px;

  @media (max-width: 600px) {
    margin-top: 24px;
  }
`;

const CommonTitle = css`
  font-size: 34px;
  line-height: 50px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  ${CommonTitle}
`;

const Strong = styled.strong`
  ${CommonTitle}
`;

const Form = styled.form`
  width: 340px;
  margin: 0 auto;
  padding: 16px 0 40px;
  margin-top: 24px;

  @media (max-width: 600px) {
    width: unset;
    margin-top: 24px;
    padding: 4px 16px 0 16px;
  }
`;
