import styled from '@emotion/styled';
import Link from 'next/link';

import PositionCardList from '../common/PositionCardList';

const LIST = [1, 2, 3, 4, 5, 6, 7, 8];

const WeeklyPickPosition = () => {
  return (
    <Block>
      <TitleBox>
        <Title>
          <BreakTag>프론트엔드 개발자 </BreakTag>
          이번주 인기 포지션
        </Title>
        <ViewAllLink href="/positions">전체 보기</ViewAllLink>
      </TitleBox>

      <PositionCardList data={LIST} />
    </Block>
  );
};

export default WeeklyPickPosition;

const Block = styled.section`
  margin: 100px auto 0px;
  max-width: 1080px;

  @media (max-width: 1080px) {
    margin-top: 40px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media (max-width: 1080px) {
    padding: 0 16px;
    margin-bottom: 6px;
  }

  @media (max-width: 600px) {
    align-items: end;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 40px;

  @media (max-width: 600px) {
    white-space: pre;
    font-size: 20px;
    line-height: 32px;
  }
`;

const BreakTag = styled.span`
  font-size: 24px;
  line-height: 40px;

  @media (max-width: 600px) {
    display: block;
    white-space: pre;
    font-size: 20px;
    line-height: 32px;
  }
`;

const ViewAllLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #888888;
  text-decoration: underline;

  @media (max-width: 1080px) {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 4px 7px 0px;
  }
`;
