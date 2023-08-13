import styled from '@emotion/styled';
import Image from 'next/image';

const SOCIALS = ['naver', 'google', 'github', 'apple'];

const AuthProfile = () => {
  const isLogin = true;

  return isLogin ? (
    <></>
  ) : (
    <UnLoginBox>
      <UnLoginBoxContent>
        <UnLoginDescription>회원가입/로그인하고</UnLoginDescription>
        <UnLoginDescription>점핏의 다양한 혜택을 만나보세요.</UnLoginDescription>

        <UnLoginButton>회원가입 / 로그인</UnLoginButton>

        <SNSBox>
          <SNSTitle>SNS로 3초만에 로그인</SNSTitle>
          {SOCIALS.map((social) => (
            <SNSButton key={social} type="button">
              <Image src={social + 'Logo.svg'} width={32} height={44} alt={social + 'login'} />
            </SNSButton>
          ))}
        </SNSBox>
      </UnLoginBoxContent>
    </UnLoginBox>
  );
};

export default AuthProfile;

const UnLoginBox = styled.div`
  width: 340px;
  padding: 32px 20px 20px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const UnLoginBoxContent = styled.div`
  height: 168px;
`;

const UnLoginDescription = styled.p`
  font-size: 17px;
  color: #222222;
  margin-bottom: 5px;
`;

const UnLoginButton = styled.button`
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
