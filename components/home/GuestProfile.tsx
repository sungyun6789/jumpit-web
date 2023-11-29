import styled from '@emotion/styled';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const SOCIALS = ['naver', 'google', 'github', 'apple'];

const GuestProfile = () => {
  return (
    <Block>
      <Content>
        <Description>회원가입/로그인하고</Description>
        <Description>점핏의 다양한 혜택을 만나보세요.</Description>

        <Button onClick={() => signIn('google')}>회원가입 / 로그인</Button>

        <SNSBox>
          <SNSTitle>SNS로 3초만에 로그인</SNSTitle>
          {SOCIALS.map((social) => (
            // @todo 플랫폼별 로그인 지원
            <SNSButton key={social} type="button" onClick={() => signIn('google')}>
              <Image src={social + '_logo.svg'} width={32} height={44} alt={social + 'login'} />
            </SNSButton>
          ))}
        </SNSBox>
      </Content>
    </Block>
  );
};

export default GuestProfile;

const Block = styled.div`
  width: 340px;
  padding: 32px 20px 20px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  background-color: #fafafa;
`;

const Content = styled.div`
  height: 168px;
`;

const Description = styled.p`
  font-size: 17px;
  color: #222222;
  margin-bottom: 5px;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 15px;
  color: #fff;
  line-height: 46px;
  border: 1px solid #000;
  border-radius: 3px;
  background-color: #000;
  cursor: pointer;
`;

const SNSBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const SNSTitle = styled.h2`
  color: #666666;
  font-size: 14px;
  font-weight: 500;
`;

const SNSButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
