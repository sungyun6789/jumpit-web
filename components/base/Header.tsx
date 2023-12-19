import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import MobileMenubar from './MobileMenubar';
import NavBar from './NavBar';
import SearchInput from './SearchInput';

const Header = () => {
  const { data } = useSession();

  return (
    <Block>
      <HeaderLayout>
        <HeaderTop>
          <LogoLink href="/">
            <Image src="/jumpit_logo_ko.svg" width={72} height={32} alt="logo" />
          </LogoLink>

          <LoginTextBox>
            {data?.user ? (
              <MobileUserName>{data.user.name}</MobileUserName>
            ) : (
              <Link href="/login">
                <MobileLoginButton>회원가입/로그인</MobileLoginButton>
              </Link>
            )}
            <SearchInput />
            <MobileMenubar />
          </LoginTextBox>
        </HeaderTop>

        <NavBar />
      </HeaderLayout>
    </Block>
  );
};

export default Header;

const Block = styled.header`
  border-bottom: 1px solid #e4e4e4;
  background-color: #fff;
  z-index: 2;

  @media (max-width: 1080px) {
    background-color: #fff;
  }
`;

const HeaderLayout = styled.div`
  max-width: 1060px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const HeaderTop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  @media (max-width: 1080px) {
    padding: 0 16px;
  }
`;

const LoginTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
`;

const MobileUserName = styled.div`
  display: none;

  @media (max-width: 1080px) {
    padding: 10px 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    color: #222222;
  }
`;

const MobileLoginButton = styled.button`
  display: none;

  @media (max-width: 1080px) {
    display: inline-block;
    font-weight: 500;
    line-height: 24px;
    color: #222222;
  }
`;

const LogoLink = styled(Link)`
  height: 33px;
`;
