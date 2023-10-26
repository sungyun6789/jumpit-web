import styled from '@emotion/styled';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import PortalModal from './PortalModal';

const SOCIALS = ['naver', 'google', 'github', 'apple'];

interface Props {
  close: () => void;
}

const AuthModal = ({ close }: Props) => {
  const { values, handleChange } = useFormik({ initialValues: { email: '' }, onSubmit: () => undefined });

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 스크롤 고정

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const login = async () => {
    // @todo 로그인
  };

  return (
    <PortalModal>
      <Background>
        <Block>
          <Header>
            <CloseIcon src="/close_icon.svg" width={24} height={24} alt="닫기 이미지" onClick={close} />
          </Header>
          <Main>
            <Title>
              반가워요
              <br />
              <b>점핏에서 커리어점프해요!</b>
            </Title>

            <Content>
              <EmailLabel>이메일</EmailLabel>
              <EmailInput placeholder="이메일을 입력해 주세요." name="email" onChange={handleChange} />

              <Button isActive={values.email === ''}>점핏 시작하기</Button>

              <div>
                {/* @todo 자동 로그인 기능 */}
                <AuthLoginLabel>자동 로그인</AuthLoginLabel>
              </div>

              <SNSWrap>
                <SNS3SecondLoginWrap>
                  <Line />
                  <SNS3SecondLoginText>SNS로 3초만에 로그인</SNS3SecondLoginText>
                  <Line />
                </SNS3SecondLoginWrap>

                <LogoWrap>
                  {SOCIALS.map((social) => (
                    <SNSButton key={social} type="button" onClick={login}>
                      <Image src={social + '_logo.svg'} width={44} height={44} alt={social + '로그인'} />
                    </SNSButton>
                  ))}
                </LogoWrap>
              </SNSWrap>

              <CompanyCustomerText>
                기업 고객이신가요?
                <CompanyServiceLink href="https://biz.jumpit.co.kr" target="_blank" rel="noreferrer">
                  기업서비스 바로가기
                </CompanyServiceLink>
              </CompanyCustomerText>
            </Content>
          </Main>
        </Block>
      </Background>
    </PortalModal>
  );
};

export default AuthModal;

const Background = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

const Block = styled.div`
  min-width: 360px;
  max-width: 768px;
  background-color: #fff;
  margin: 0 auto;
  height: 100%;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
`;

const Main = styled.main`
  height: 100%;
  padding: 0 20px;
`;

const CloseIcon = styled(Image)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  line-height: 36px;

  b {
    font-size: 24px;
    line-height: 36px;
  }
`;

const Content = styled.div`
  margin: 28px 0 20px;
`;

const EmailLabel = styled.label`
  display: block;
  letter-spacing: -0.5px;
  line-height: 24px;
  padding-bottom: 6px;
  color: #222;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  letter-spacing: -1px;

  :hover,
  :focus {
    border-color: #222;
  }
`;

const Button = styled.button<{ isActive: boolean }>`
  height: 56px;
  line-height: 54px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.isActive ? '#c4c4c4' : '#000')};
  background-color: ${(props) => (props.isActive ? '#c4c4c4' : '#000')};
  margin-bottom: 16px;
  margin-top: 24px;
  width: 100%;
  border-radius: 3px;
  letter-spacing: -0.5px;
  color: #fff;
  cursor: pointer;
`;

const AuthLoginLabel = styled.label`
  padding-left: 30px;
  font-size: 16px;
  color: #888888;
  letter-spacing: -0.5px;
  line-height: 24px;
`;

const SNSWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const SNS3SecondLoginWrap = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SNS3SecondLoginText = styled.span`
  flex: 1 1 0%;
  padding: 0 10px;
  margin: 0 10px;
  font-size: 14px;
  line-height: 24px;
  color: #888888;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eaeaea;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 20px;
`;

const SNSButton = styled.button`
  border: none;
  border-radius: 0;
  background: none;
  cursor: pointer;
`;

const CompanyCustomerText = styled.p`
  text-align: center;
  margin-top: 28px;
  color: #444444;
  font-size: 13px;
`;

const CompanyServiceLink = styled(Link)`
  color: #00d959;
  margin-left: 5px;
  text-decoration: underline;
  font-size: 13px;
`;
