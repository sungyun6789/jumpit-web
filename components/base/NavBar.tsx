import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { mont } from '~/pages/_app';

import NavAuthBar from './NavAuthBar';

const DATA = [
  { label: '개발자 채용', url: '/positions', new: false },
  { label: '이력서', url: '/이력서', new: false },
  { label: '취업 Q&A', url: '/career-qna', new: false },
  { label: '#꿀 피드', url: '/feed', new: true },
  { label: '개발자 인터뷰', url: '/job-interview', new: false },
  { label: '개취콘', url: '/book-concert', new: false },
];

/**
 * 네비게이션 왼쪽을 담당하는 컴포넌트
 */
const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <Block>
      <NavUL>
        {DATA.map((value) => (
          <li key={value.url}>
            <NavLink href={value.url} selected={pathname === value.url}>
              {value.label}
              {value.new && <NewTag className={mont.className}>N</NewTag>}
            </NavLink>
          </li>
        ))}
      </NavUL>

      <NavAuthBar />
    </Block>
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

const NavUL = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  color: black;

  li {
    height: 44px;
    display: flex;
    align-items: center;
  }

  :hover {
    li,
    a {
      color: #888888;
    }
  }

  @media (max-width: 1080px) {
    gap: 20px;
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

const NewTag = styled.span`
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
