import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

import RookieContentCard from './RookieContentCard';

import type { ContentRookieResponse } from '~/pages/api/content/rookies';

const RookieContentList = () => {
  const [page, setPage] = useState(1);

  const { data } = useQuery(['/api/content/rookies'], async () => {
    const { data } = await axios.get<ContentRookieResponse>('/api/content/rookies', {
      params: {
        page,
      },
    });
    return data;
  });

  return (
    <div>
      <Block>
        {data?.result.contents.map((content) => (
          <RookieContentCard key={content.id} content={content} />
        ))}
      </Block>
    </div>
  );
};

export default RookieContentList;

const Block = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px 80px;
  position: relative;
  box-sizing: content-box;
`;
