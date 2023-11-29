import styled from '@emotion/styled';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { mont } from '~/pages/_app';

import GuestProfile from './GuestProfile';

const UserProfile = () => {
  const { data } = useSession();

  return data?.user ? (
    <Block>
      <Content>
        <GreetingMessageBox>
          <Greeting>{data.user.name}님 반가워요</Greeting>
          <Button onClick={() => signOut()}>로그아웃</Button>
        </GreetingMessageBox>

        <Email className={mont.className}>{data.user.email}</Email>

        <Menu>
          <MenuLink href="/resumes">
            <MenuIcon>📝</MenuIcon>
            <MenuItem>이력서 작성</MenuItem>
          </MenuLink>
          <MenuLink href="/myjumpit">
            <MenuIcon>😎</MenuIcon>
            <MenuItem>마이점핏</MenuItem>
          </MenuLink>
        </Menu>
      </Content>
    </Block>
  ) : (
    <GuestProfile />
  );
};

export default UserProfile;

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

const GreetingMessageBox = styled.div`
  display: flex;
  gap: 10px;
  height: 22px;
`;

const Greeting = styled.p`
  font-size: 17px;
  color: #222222;
`;

const Button = styled.button`
  font-size: 13px;
  color: #999999;
  border: none;
  background: none;
  cursor: pointer;
`;

const Email = styled.p`
  color: #666666;
  line-height: 16px;
  margin: 10px 0px 24px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  height: 50px;
  background-color: #fff;
  box-sizing: content-box;

  a:nth-of-type(1) {
    border-right: 1px solid #d8d8d8;
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const MenuIcon = styled.div`
  margin-bottom: 10px;
`;

const MenuItem = styled.p`
  font-size: 16px;
`;
