import styled from '@emotion/styled';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { HomeDataContext } from '~/context/HomeDataProvier';
import PositionCardList from '../position/PositionCardList';
import getDeviceType from '~/utils/getDeviceType';

const WeeklyPickPosition = () => {
  const data = useContext(HomeDataContext);
  const [isDesktop, setIsDesktop] = useState(false);

  const onResize = () => setIsDesktop(getDeviceType() === 'desktop');

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const positions = isDesktop ? data?.weeklyPositions.positions : data?.weeklyPositions.positions.slice(0, 4);

  return (
    <Block>
      <TitleBox>
        <Title>{data?.weeklyPositions.title}</Title>
        <ViewAllLink href="/positions">전체 보기</ViewAllLink>
      </TitleBox>

      <PositionCardList data={positions} />
    </Block>
  );
};

export default WeeklyPickPosition;

const Block = styled.section`
  margin: 64px auto 0px;
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
  margin-bottom: 6px;

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
