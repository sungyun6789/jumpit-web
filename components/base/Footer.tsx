import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINK_LIST1 = [
  { title: '서비스 소개', url: '/hello' },
  { title: '기업 서비스', url: 'https://biz.jumpit.co.kr/' },
  { title: '점핏Team', url: 'https://team.jumpit.co.kr/' },
];

const NAV_LINK_LIST2 = [
  { title: '이용약관', url: 'https://www.jumpit.co.kr/policy/terms' },
  { title: '개인정보처리방침', url: 'https://www.jumpit.co.kr/policy/private' },
  { title: '자주묻는질문 FAQ', url: 'https://team.jumpit.co.kr/e8154e47-4105-42fa-b374-39181297ed35' },
];

const SNS_LIST = [
  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-instagram.svg',
    url: 'https://www.instagram.com/jumpit.official',
  },
  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-kakao.svg',
    url: 'https://pf.kakao.com/_BPpJs',
  },
  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-youtube.svg',
    url: 'https://www.youtube.com/channel/UCo8N6hfw4a5PDaiPaeBr4UQ/featured',
  },

  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-facebook.svg',
    url: 'https://www.facebook.com/jumpit.ITjump',
  },
  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-google.svg',
    url: 'https://play.google.com/store/apps/details?id=kr.co.saramin.jumpit',
  },
  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-apple.svg',
    url: 'https://apps.apple.com/app/id1552125375',
  },
];

const Footer = () => {
  return (
    <Block>
      <Inner>
        <Image src="/enLogo.svg" width={68} height={24} alt="logo" />

        <Content>
          <DescriptionBox>
            <Description>
              점핏 고객센터 : 02-2025-2733 (평일 09:00 - 18:00, 점심시간 12:00 - 13:00, 주말·공휴일 휴무)
              <br />
              이메일 : help@jumpit.co.kr / Fax : 02-6937-0036
            </Description>

            <Description>
              (주)사람인, 우 : 08378, 서울특별시 구로구 디지털로34길 43, 14층(구로동, 코오롱싸이언스밸리 1차), 대표 :
              김용환
              <br />
              사업자등록 : 113-86-00917 / 직업정보제공사업 : 서울 관악 제 2005-6호 / 통신판매업 : 제 2339호
            </Description>

            <Description>Copyright (c) (주)사람인. All rights reserved.</Description>

            <SNSBox>
              {SNS_LIST.map((sns) => (
                <Link key={sns.icon} href={sns.url} target="_blank">
                  <Image src={sns.icon} width={36} height={36} alt="sns" />
                </Link>
              ))}
            </SNSBox>
          </DescriptionBox>

          <Nav>
            <StyledUl>
              {NAV_LINK_LIST1.map((link) => (
                <li key={link.title}>
                  <StyledLink href={link.url} target="_blank">
                    {link.title}
                  </StyledLink>
                </li>
              ))}
            </StyledUl>

            <StyledUl>
              {NAV_LINK_LIST2.map((link) => (
                <li key={link.title}>
                  <StyledLink href={link.url} target="_blank">
                    {link.title === '개인정보처리방침' ? <b>{link.title}</b> : link.title}
                  </StyledLink>
                </li>
              ))}
            </StyledUl>
          </Nav>
        </Content>
      </Inner>
    </Block>
  );
};

export default Footer;

const Block = styled.footer`
  background-color: #fbfbfb;
  padding: 40px 0px 30px;
`;

const Inner = styled.div`
  display: flex;
  gap: 24px;

  max-width: 1060px;
  margin: auto;
  padding: 24px 0px 60px;
`;

const Content = styled.div`
  display: flex;
  gap: 135px;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.span`
  display: inline-block;
  color: #888888;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.5px;
  padding-bottom: 16px;
`;

const SNSBox = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 14px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  color: #444444;
  line-height: 24px;
  letter-spacing: -0.5px;
`;
