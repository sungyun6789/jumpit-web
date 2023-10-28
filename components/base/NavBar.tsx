import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { DesktopView } from '~/styles/breakpoint';

import Button from '../common/Button';
import AuthModal from '../modal/AuthModal';

const NavBar = () => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();

  return (
    <>
      <Block>
        <NavUL>
          <li>
            <NavLink href="/positions" selected={pathname === '/positions'}>
              직무 탐색
            </NavLink>
          </li>

          <RookieNavLI>
            <NavLink href="/rookie" selected={pathname.includes('/rookie')}>
              더. 루키
            </NavLink>
            <div className="sub-nav">
              <RookieSubNavLink href="/rookie/position">절찬 채용중 👀</RookieSubNavLink>
              <RookieSubNavLink href="/rookie/content">취업꿀팁 대방출 🔥</RookieSubNavLink>
            </div>
          </RookieNavLI>

          <li>
            <NavLink href="/이력서" selected={pathname === '/이력서'}>
              이력서
            </NavLink>
          </li>

          <li>
            <NavLink href="/career-qna" selected={pathname === '/career-qna'}>
              취업 Q&A
            </NavLink>
          </li>

          <li>
            <NavLink href="/job-interview" selected={pathname === '/job-interview'}>
              개발자 인터뷰
            </NavLink>
          </li>

          <li>
            <NavLink href="/book-concert" selected={pathname === '/book-concert'}>
              개취콘
            </NavLink>
          </li>
        </NavUL>

        <DesktopView>
          <AuthUL>
            {data?.user ? (
              <LI>
                <UserNameButton>{data.user.name}</UserNameButton>
                <Nim>님</Nim>
              </LI>
            ) : (
              <LI onClick={() => setIsOpen(true)}>회원가입/로그인</LI>
            )}
            <LI>
              <BlankLink href="https://biz.jumpit.co.kr/" target="_blank">
                기업 서비스
              </BlankLink>
            </LI>
          </AuthUL>
        </DesktopView>
      </Block>
      {isOpen && <AuthModal close={() => setIsOpen(false)} />}
    </>
  );
};

export default NavBar;

const Block = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  overflow-x: scroll;
  white-space: nowrap;
  flex-wrap: nowrap;

  @media (max-width: 1080px) {
    padding: 0 16px;
  }
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  color: black;
  height: 44px;

  :hover {
    li,
    a {
      color: #888888;
    }
  }
`;

const NavUL = styled(UL)`
  gap: 40px;

  @media (max-width: 1080px) {
    gap: 20px;
  }
`;

const AuthUL = styled(UL)`
  margin-right: -12px;
  gap: 24px;
`;

const NavLink = styled(Link)<{ selected: boolean }>`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  padding: 10px 4px;
  font-weight: ${(props) => (props.selected ? 'bold' : '400')};

  :hover {
    color: black !important;
  }
`;

const LI = styled.li`
  padding: 0 12px;
  font-weight: 500;
  line-height: 24px;
  color: #222222;
  letter-spacing: -0.5px;
  cursor: pointer;

  :hover {
    color: black !important;
  }
`;

const UserNameButton = styled(Button)`
  width: 60px;
  padding: 10px 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: #222222;
`;

const Nim = styled.span`
  padding-bottom: 1px;
`;

const BlankLink = styled(Link)`
  color: black !important;
`;

const RookieNavLI = styled(LI)`
  .sub-nav {
    display: none;
  }

  @media (min-width: 1081px) {
    :hover {
      .sub-nav {
        display: block;
        position: absolute;
        width: 175px;
        padding: 8px 0;
        margin: 10px 0;
        border: 1px solid #e4e4e4;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: rgba(20, 20, 20, 0.12) 0px 8px 16px;
      }

      a {
        color: #000 !important;
      }
    }
  }
`;

const RookieSubNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 23px;
  height: 48px;
  font-weight: normal;

  :hover {
    background-color: #f4f4f4;
  }
`;
