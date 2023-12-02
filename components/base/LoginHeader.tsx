import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const LoginHeader = () => {
  return (
    <Block>
      <LogoLink href="/">
        <Image src="/jumpit_logo_ko.svg" width={72} height={32} alt="" />
      </LogoLink>
    </Block>
  );
};

export default LoginHeader;

const Block = styled.header`
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
`;
