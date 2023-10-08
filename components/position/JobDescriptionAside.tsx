import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import COLORS from '~/constants/colors';
import { JobDescriptionContext } from '~/context/JobDescriptionProvider';

const JobDescriptionAside = () => {
  const { query } = useRouter();

  const data = useContext(JobDescriptionContext);

  if (!data) return null;

  const copyUrlToClipboard = async () => {
    await window.navigator.clipboard.writeText(location.href);
    alert('URL이 복사되었습니다. 많이 공유해주세요:)');
  };

  return (
    <Block>
      <Top>
        이 포지션 면접 질문이 궁금하다면?
        <AICoach>
          <Image src="/ai_coach_blue.svg" width={20} height={20} alt="ai coach" />
          AI 면접 코치
          <Image src="/right_arrow_blue.svg" width={20} height={20} alt="ai 면접 코치" />
        </AICoach>
      </Top>
      <Content>
        <Link href={`/company/${query.id}`}>
          <Logo src={data.logo} width={72} height={72} alt="기업 로고" />
        </Link>
        <ContentTitle>{data.title}</ContentTitle>
        <CompanyName>
          <Link href={`/company/${query.id}`}>{data.companyName}</Link>
        </CompanyName>
        <Celebration>💰 취업축하금 70만원</Celebration>
        {/* @todo 로그인 기능 구현시 지원하기 기능 추가 */}
        <Button>지원하기</Button>
        <StyledUL>
          <StyledLI onClick={copyUrlToClipboard}>
            <Icon url="https://www.jumpit.co.kr/App/build/static/media/ic_share.8dfaacd7.svg" />
            <IconText>공유</IconText>
          </StyledLI>
          <VerticalLine />
          <StyledLI>
            <Icon url="https://www.jumpit.co.kr/App/build/static/media/ic_bookmark.26fed19a.svg" />
            {/* @todo 로그인 기능 구현시 스크랩 기능 추가 */}
            <IconText>스크랩</IconText>
          </StyledLI>
        </StyledUL>
      </Content>

      <Banner>
        <Image
          src="https://cdn.jumpit.co.kr/jumpit/banner/position_view/event_notification.webp"
          width={340}
          height={72}
          alt="이벤트"
        />
      </Banner>
    </Block>
  );
};

export default JobDescriptionAside;

const Block = styled.aside`
  position: fixed;
  right: calc((100% - 1060px) / 2);
  top: 219px;
  cursor: default;
`;

const Top = styled.div`
  width: 340px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 4px 0 0;
  background-color: #e6f1fd;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #444444;
`;

const AICoach = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  font-weight: 700;
  color: #0176ed;
  text-decoration-line: underline;
`;

const Content = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 32px 40px;
  border: 1px solid #e4e4e4;
  border-top: unset;
  border-radius: 0 0 4px 4px;
`;

const Logo = styled(Image)`
  border-radius: 100px;
  border: 1px solid #e4e4e4;
`;

const ContentTitle = styled.h2`
  margin: 16px 0 8px;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.5px;
  text-align: center;
`;

const CompanyName = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #888888;
  margin-bottom: 16px;
`;

const Celebration = styled.span`
  margin-bottom: 24px;
  padding: 0 12px;
  background-color: #f4f4f4;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  color: #444444;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  font-size: 15px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 16px;
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  color: #fff;
  padding: 0 16px;
  letter-spacing: -0.5px;
  border-radius: 3px;
  cursor: pointer;
`;

const StyledUL = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledLI = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.i<{ url: string }>`
  width: 14px;
  height: 14px;
  background: url(${(props) => props.url}) center center no-repeat;
`;

const IconText = styled.span`
  display: inline-block;
  margin-left: 4px;
  text-decoration: underline;
  text-underline-position: under;
  letter-spacing: -0.5px;
  font-size: 14px;
  color: #222222;
`;

const VerticalLine = styled.span`
  width: 1px;
  height: 10px;
  background-color: #eaeaea;
  margin: 0 12px;
`;

const Banner = styled.div`
  position: relative;
  width: 340px;
  height: 72px;
  margin-top: 16px;
  border-radius: 4px;
`;
