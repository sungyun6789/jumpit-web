import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import PositionCardList from './PositionCardList';
import type { PositionRecommendResponse } from '~/pages/api/position/[id]/recommend';

const SimilarPositionList = () => {
  const { query, isReady } = useRouter();
  const id = query.id;

  const { data } = useQuery(
    [`/api/position/${id}/recommend`],
    async () => {
      const { data } = await axios.get<PositionRecommendResponse>(`/api/position/${id}/recommend`);
      return data;
    },
    { enabled: isReady }
  );

  return (
    <Background>
      <Block>
        <Title>지금 보는 포지션과 유사해요</Title>
        <PositionCardList data={data?.result.positions} />
      </Block>
    </Background>
  );
};

export default SimilarPositionList;

const Background = styled.div`
  background-color: #fbfbfd;
`;

const Block = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 0 56px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 40px;
  font-weight: bold;
  padding: 0 8px 6px;
`;
