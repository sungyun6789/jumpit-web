import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// import SearchInput from '../search/SearchInput';

// import NavBar from './NavBar';

const NavBar = dynamic(() => import('./NavBar'), { ssr: false });
const SearchInput = dynamic(() => import('../search/SearchInput'), { ssr: false });

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
  background-color: #fff;
  z-index: 1;

  @media (max-width: 1080px) {
    border-bottom: unset;
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

const LogoLink = styled(Link)`
  height: 33px;
`;
