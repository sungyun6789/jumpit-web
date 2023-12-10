import styled from '@emotion/styled';
import Link from 'next/link';
import COLORS from '~/constants/colors';

import FeedCard from './FeedCard';

import type { Content } from '~/pages/api/content/rookies';

type Props = {
  data: Content[] | undefined;
};

const OnlyJumpitContent = ({ data }: Props) => {
  return (
    <>
      {data?.map((content) => (
        <FeedCard key={content.id} data={content} />
      ))}
      <BlurBlock>
        <Description>
          더많은 내용이 궁금하다면?
          <br />
          <b>지금 로그인하고, 더 많은 콘텐츠를 확인해보세요!</b>
        </Description>

        {/* 실제 서비스에서는 callback url까지 설정 */}
        <Link href="/login">
          <Button>지금 바로 로그인 하기</Button>
        </Link>
      </BlurBlock>
    </>
  );
};

export default OnlyJumpitContent;

const BlurBlock = styled.div`
  width: 1080px;
  height: 820px;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  backdrop-filter: blur(4px);
  top: 760px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Description = styled.h2`
  font-weight: 400;
  text-align: center;
  font-size: 24px;
  letter-spacing: -0.5px;
  line-height: 38px;
  margin: 210px 0px 48px;

  b {
    text-align: center;
    font-size: 24px;
    letter-spacing: -0.5px;
    line-height: 38px;
  }
`;

const Button = styled.button`
  padding: 0px 16px;
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  color: #fff;
  height: 48px;
  line-height: 46px;
  font-size: 15px;
  letter-spacing: -0.5px;
  border-radius: 3px;

  :hover {
    background-color: #01c662;
    border-color: #01c662;
  }
`;
