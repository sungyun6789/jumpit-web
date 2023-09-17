import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const ITEMS = [
  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/ico_resume.svg',
    url: '/event/for-develop',
    isNewTab: true,
    title: '이력서.',
    subTitle: '제일 눈에 띄는 방법.',
  },
  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/ico_coding.svg',
    url: '/rookie/content?tag=8',
    isNewTab: false,
    title: '코딩테스트 후기.',
    subTitle: '합격자가 알려주는 꿀팁.',
  },
  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/ico_book.svg',
    url: '/rookie/content?tag=7',
    isNewTab: false,
    title: '개발추천도서.',
    subTitle: '읽다보면 빠져들어요.',
  },
  {
    icon: 'https://cdn.jumpit.co.kr/jumpit/personal/ico_counsel.svg',
    url: '/rookie/content?tag=5',
    isNewTab: false,
    title: '개발자 고민 상담소.',
    subTitle: '무엇이든 물어보세요.',
  },
];

const RookieTip = () => {
  return (
    <Block>
      <TitleLayout>
        <Title>
          미리미리 준비해둬요, <br />
          언제 도움될지 모르니까.
        </Title>
        <AllLink href="/rookie/content?tag=11">전체보기</AllLink>
      </TitleLayout>

      <CardLayout>
        {ITEMS.map((item) => (
          <Card key={item.title} href={item.url} target={item.isNewTab ? '_blank' : '_self'}>
            <Image src={item.icon} width={40} height={40} alt="" />
            <CardDescription>
              {item.title} <br />
              {item.subTitle}
            </CardDescription>
            <SeeLink>보기</SeeLink>
          </Card>
        ))}
      </CardLayout>
    </Block>
  );
};

export default RookieTip;

const Block = styled.section`
  max-width: 1060px;
  margin: 0 auto;
  padding: 64px 0;

  @media (max-width: 1080px) {
    margin: 0 16px;
  }

  @media (max-width: 600px) {
    padding: 48px 0;
  }
`;

const TitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    align-items: flex-end;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 40px;

  br {
    display: none;
  }

  @media (max-width: 600px) {
    width: 240px;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.5px;

    br {
      display: block;
    }
  }
`;

const AllLink = styled(Link)`
  text-decoration: underline;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #888888;
  font-size: 16px;

  @media (max-width: 600px) {
    text-decoration: none;
    font-size: 14px;
  }
`;

const CardLayout = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-wrap: wrap;
  }
`;

const Card = styled(Link)`
  box-sizing: content-box;
  width: 190px;
  height: 140px;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  transition: transform 0.4s ease-out 0s, box-shadow 0.4s ease-out 0s;
  cursor: pointer;

  :hover {
    border-radius: 8px;
    position: relative;
    transform: translateY(-8px);
    box-shadow: rgba(117, 99, 186, 0.1) 0px 8px 16px;
    margin-bottom: 8px;
    border: 1px solid #7251f3;

    h3 {
      color: #7251f3;
    }

    span {
      text-decoration: underline;
    }
  }

  @media (max-width: 1080px) {
    margin: 0 16px 16px 0;
    flex: 1 1 40%;
  }

  @media (max-width: 600px) {
    padding: 20px;
    height: 154px;
    flex: 1 1 30%;
  }
`;

const CardDescription = styled.h3`
  margin-top: 12px;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -0.5px;
  white-space: pre;

  @media (max-width: 600px) {
    max-width: 110px;
    font-size: 15px;
    line-height: 22px;
    white-space: unset;

    br {
      display: none;
    }
  }
`;

const SeeLink = styled.span`
  margin-top: 16px;
  display: block;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #7251f3;
`;
