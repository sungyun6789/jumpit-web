import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import AuthModal from '../modal/AuthModal';
import SearchInput from '../search/SearchInput';

import NavBar from './NavBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();

  return (
    <>
      <Block>
        <HeaderLayout>
          <HeaderTop>
            <LogoLink href="/">
              <Image src="/jumpit_logo_ko.svg" width={72} height={32} alt="logo" />
            </LogoLink>

            <LoginTextBox>
              {data?.user ? (
                <UserName>{data.user.name}</UserName>
              ) : (
                <LoginButton onClick={() => setIsOpen(true)}>회원가입/로그인</LoginButton>
              )}
              <SearchInput />
            </LoginTextBox>
          </HeaderTop>

          <NavBar />
        </HeaderLayout>
      </Block>
      {isOpen && <AuthModal close={() => setIsOpen(false)} />}
    </>
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

const UserName = styled.div`
  display: none;

  @media (max-width: 1080px) {
    padding: 10px 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    color: #222222;
  }
`;

const LoginButton = styled.button`
  display: none;

  @media (max-width: 1080px) {
    display: inline-block;
    font-weight: 500;
    line-height: 24px;
  }
`;

const LogoLink = styled(Link)`
  height: 33px;
`;
