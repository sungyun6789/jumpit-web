import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MENU_LIST = [
  { label: '개발자 채용', url: '/positions' },
  { label: '이력서', url: '/resumes' },
  { label: '취업 Q&A', url: '/career-qna' },
  { label: '#꿀 피드', url: '/feed' },
  { label: '개발자 인터뷰', url: '/job-interview' },
  { label: '개취콘', url: '/book-concert' },
];

const MobileMenubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <Block>
      <MenuIcon>
        {isOpen ? (
          <>
            <Image width={24} height={24} src="/close_icon.svg" alt="닫기" onClick={close} />
            <FixedBlock>
              <MenuWrap>
                {MENU_LIST.map((menu) => (
                  <Link key={menu.label} href={menu.url} onClick={close}>
                    <Menu>{menu.label}</Menu>
                  </Link>
                ))}
                <Link href="https://biz.jumpit.co.kr" target="_blank" onClick={close}>
                  <CompanyServiceMenu>기업 서비스</CompanyServiceMenu>
                </Link>
              </MenuWrap>
            </FixedBlock>
          </>
        ) : (
          <Image width={24} height={24} src="/menu_icon.svg" alt="메뉴" onClick={open} />
        )}
      </MenuIcon>
    </Block>
  );
};

export default MobileMenubar;

const Block = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
  }
`;

const MenuIcon = styled.button`
  width: 24px;
  height: 24px;
`;

const FixedBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 55px 0 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const MenuWrap = styled.ul`
  padding: 17px 20px 60px;
  background-color: #fff;
`;

const Menu = styled.li`
  text-align: left;
  padding: 15px 0;
  font-size: 16px;
  letter-spacing: -0.5px;
  line-height: 1.5;
  color: #666666;
`;

const CompanyServiceMenu = styled(Menu)`
  margin-top: 15px;
  border-top: 1px solid #eaeaea;
  padding-top: 30px;
`;
