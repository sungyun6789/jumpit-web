import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const RookieTip = () => {
  return (
    <Block>
      <TitleLayout>
        <Title>미리미리 준비해둬요, 언제 도움될지 모르니까.</Title>
        <AllLink href="/rookie/content?tag=11">전체보기</AllLink>
      </TitleLayout>

      <CardLayout>
        <Card href="/event/for-develop" target="_blank">
          <Image src="https://cdn.jumpit.co.kr/jumpit/personal/ico_resume.svg" width={40} height={40} alt="" />
          <CardDescription>
            이력서. <br />
            제일 눈에 띄는 방법.
          </CardDescription>
          <SeeLink>보기</SeeLink>
        </Card>

        <Card href="/rookie/content?tag=8">
          <Image src="https://cdn.jumpit.co.kr/jumpit/personal/ico_coding.svg" width={40} height={40} alt="" />
          <CardDescription>
            코딩테스트 후기. <br />
            합격자가 알려주는 꿀팁.
          </CardDescription>
          <SeeLink>보기</SeeLink>
        </Card>

        <Card href="/rookie/content?tag=7">
          <Image src="https://cdn.jumpit.co.kr/jumpit/personal/ico_book.svg" width={40} height={40} alt="" />
          <CardDescription>
            개발추천도서. <br />
            읽다보면 빠져들어요.
          </CardDescription>
          <SeeLink>보기</SeeLink>
        </Card>

        <Card href="/rookie/content?tag=5">
          <Image src="https://cdn.jumpit.co.kr/jumpit/personal/ico_counsel.svg" width={40} height={40} alt="" />
          <CardDescription>
            개발자 고민 상담소. <br />
            무엇이든 물어보세요.
          </CardDescription>
          <SeeLink>보기</SeeLink>
        </Card>
      </CardLayout>
    </Block>
  );
};

export default RookieTip;

const Block = styled.section`
  max-width: 1060px;
  margin: 0 auto;
  padding: 64px 0;
`;

const TitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 40px;
`;

const AllLink = styled(Link)`
  text-decoration: underline;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #888888;
  font-size: 16px;
`;

const CardLayout = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
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
`;

const CardDescription = styled.h3`
  margin-top: 12px;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -0.5px;
`;

const SeeLink = styled.span`
  margin-top: 16px;
  display: block;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #7251f3;
`;
