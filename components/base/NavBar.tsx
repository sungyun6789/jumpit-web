import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { mont } from '~/pages/_app';
import { DesktopView } from '~/styles/breakpoint';

import AuthModal from '../modal/AuthModal';

const NavBar = () => {
  const { pathname } = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = useSession();

  return (
    <>
      <Block>
        <NavUL>
          <li>
            <NavLink href="/positions" selected={pathname === '/positions'}>
              개발자 채용
            </NavLink>
          </li>

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
            <NavLink href="/feed" selected={pathname === '/feed'}>
              #꿀 피드
              <Feed className={mont.className}>N</Feed>
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
              <SubMenuWrap onMouseOver={() => setIsMenuOpen(true)} onMouseOut={() => setIsMenuOpen(false)}>
                <AuthNavLI isOpen={isMenuOpen}>
                  <AuthNav>
                    <UserNameButton>{data.user.name}</UserNameButton>
                    <Nim>님</Nim>
                    <Icon src="/bottom_arrow.svg" width={16} height={16} alt="자세히 보기" />
                  </AuthNav>

                  <div className="sub-nav">
                    <Link href="/myjumpit">마이점핏</Link>
                    <Link href="/applications-status/applied">취업축하금 신청</Link>
                    <div className="logout" onClick={() => signOut()}>
                      로그아웃
                    </div>
                  </div>
                </AuthNavLI>
              </SubMenuWrap>
            ) : (
              <LI onClick={() => setIsLoginModalOpen(true)}>회원가입/로그인</LI>
            )}
            <LI>
              <BlankLink href="https://biz.jumpit.co.kr/" target="_blank">
                기업 서비스
              </BlankLink>
            </LI>
          </AuthUL>
        </DesktopView>
      </Block>
      {isLoginModalOpen && <AuthModal close={() => setIsLoginModalOpen(false)} />}
    </>
  );
};

export default NavBar;

const Block = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  white-space: nowrap;
  flex-wrap: nowrap;

  @media (max-width: 1080px) {
    overflow-x: scroll;
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

  li {
    height: 44px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1080px) {
    gap: 20px;
  }
`;

const AuthUL = styled(UL)`
  margin-right: -12px;

  li {
    margin: 0 12px;
  }
`;

const NavLink = styled(Link)<{ selected: boolean }>`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  height: 44px;
  letter-spacing: -0.5px;
  padding: 10px 4px;
  font-weight: ${(props) => (props.selected ? 'bold' : '400')};

  :hover {
    color: black !important;
  }
`;

const AuthNav = styled.div`
  display: flex;
  align-items: center;
`;

const LI = styled.li`
  font-weight: 500;
  line-height: 24px;
  color: #222222;
  letter-spacing: -0.5px;
  cursor: pointer;

  :hover {
    color: black !important;

    img {
      transform: rotate(180deg);
    }
  }
`;

const UserNameButton = styled.button`
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

const Icon = styled(Image)`
  margin-left: 5px;
`;

const SubMenuWrap = styled.div`
  position: relative;

  .logout,
  a {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-weight: normal;

    :hover {
      background-color: #f4f4f4;
    }
  }
`;

const BlankLink = styled(Link)`
  color: black !important;
`;

const AuthNavLI = styled(LI)<{ isOpen: boolean }>`
  .sub-nav {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};

    position: absolute;
    width: 175px;
    right: 0;
    top: 45px;
    border: 1px solid #e4e4e4;
    box-shadow: rgba(20, 20, 20, 0.12) 0px 8px 16px;
    border-radius: 4px;
    padding: 8px 0;
    background-color: #fff;
    color: black !important;

    a {
      color: #222222 !important;
    }
  }
`;

const Feed = styled.span`
  position: absolute;
  top: 12px;
  bottom: 15px;
  right: -17px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background-color: #f04452;
  color: #fff;
  border-radius: 100%;
  font-size: 8px;
  font-weight: 800;
  line-height: 10px;
`;
