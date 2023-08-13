import styled from '@emotion/styled';
import Link from 'next/link';

import COLORS from '~/constants/colors';
import { mont } from '~/pages/_app';

const ITEMS_1 = [
  { title: '직무 탐색', url: '/positions' },
  {
    title: '더. 루키',
    url: '/rookie',
    subItems: [
      { title: '절찬 채용중', url: '/rookie/position' },
      { title: '취업꿀팁 대방출', url: '/rookie/content' },
    ],
  },
  { title: '이력서', url: '/rookie' },
  { title: '개발자 인터뷰', url: '/job-interview' },
  { title: '취업 Q&A', url: '/career-qna' },
  { title: '개취콘', url: '/book-concert/22' },
];

const NavBar = () => {
  return (
    <Block>
      <UL gap={40}>
        {ITEMS_1.map((item, index) => (
          <li key={item.title}>
            <NavLink href={item.url}>
              {item.title}
              {index + 1 === ITEMS_1.length && <Free className={mont.className}>Free</Free>}
            </NavLink>
          </li>
        ))}
      </UL>

      <UL gap={24}>
        <LI>회원가입/로그인</LI>
        <LI>
          <BlankLink href="https://biz.jumpit.co.kr/" target="_blank">
            기업 서비스
          </BlankLink>
        </LI>
      </UL>
    </Block>
  );
};

export default NavBar;

const Block = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const UL = styled.ul<{ gap: number }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap}px;
  list-style-type: none;
  color: black;
  height: 44px;

  :hover {
    li,
    a {
      color: #888888;
    }
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  padding: 10px 4px;

  :hover {
    color: black !important;
  }
`;

const Free = styled.span`
  position: absolute;
  top: 10px;
  right: -25px;
  font-size: 12px;
  line-height: 16px;
  color: ${COLORS.primary};
`;

const LI = styled.li`
  font-weight: 500;
  line-height: 24px;
  color: #222222;
  font-family: 'Noto Sans KR', -apple-system, system-ui, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Nanum Gothic',
    sans-seriff;
  letter-spacing: 0.5px;
  cursor: pointer;

  :hover {
    color: black !important;
  }
`;

const BlankLink = styled(Link)`
  color: black !important;
`;
