import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import FeedCard from './FeedCard';

import type { ContentRookieResponse } from '~/pages/api/content/rookies';

const FeedCardList = () => {
  const { data } = useQuery(['/api/content/rookies'], async () => {
    const { data } = await axios.get<ContentRookieResponse>('/api/content/rookies');
    return data.result;
  });

  return (
    <Block>
      {data?.contents.map((content) => (
        <FeedCard key={content.id} data={content} />
      ))}
    </Block>
  );
};

export default FeedCardList;

const Block = styled.section`
  box-sizing: content-box;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px 80px;
  position: relative;
`;
