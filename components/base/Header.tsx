import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import SearchInput from '../search/SearchInput';

const Header = () => {
  return (
    <Block>
      <Link href="/">
        <Image src="/koLogo.svg" width={72} height={32} alt="logo" />
      </Link>

      <SearchInput />
    </Block>
  );
};

export default Header;

const Block = styled.header`
  max-width: 1060px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;
