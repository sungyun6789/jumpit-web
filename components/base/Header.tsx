import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import SearchInput from '../search/SearchInput';

import NavBar from './NavBar';

const Header = () => {
  return (
    <Block>
      <HeaderLayout>
        <HeaderTop>
          <LogoLink href="/">
            <Image src="/koLogo.svg" width={72} height={32} alt="logo" />
          </LogoLink>

          <SearchInput />
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
`;

const HeaderLayout = styled.div`
  max-width: 1060px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const LogoLink = styled(Link)`
  height: 33px;
`;
