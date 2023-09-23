import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../common/Button';
import SearchInput from '../search/SearchInput';

import NavBar from './NavBar';

const Header = () => {
  const isLogin = false;

  return (
    <Block>
      <HeaderLayout>
        <HeaderTop>
          <LogoLink href="/">
            <Image src="/koLogo.svg" width={72} height={32} alt="logo" />
          </LogoLink>

          <LoginTextBox>
            {!isLogin && <LoginButton>회원가입/로그인</LoginButton>}
            <SearchInput />
          </LoginTextBox>
        </HeaderTop>

        <NavBar />
      </HeaderLayout>
    </Block>
  );
};

export default Header;

const Block = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
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

const LoginButton = styled(Button)`
  display: none;
  font-family: inherit;

  @media (max-width: 1080px) {
    display: inline-block;
    font-weight: 500;
    line-height: 24px;
  }
`;

const LogoLink = styled(Link)`
  height: 33px;
`;
