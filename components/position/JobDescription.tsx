import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { PositionResponse } from '~/pages/api/position/[id]';

const JobDescription = () => {
  const { query, isReady } = useRouter();
  const id = query.id;

  const { data } = useQuery(
    ['/api/position/', id],
    async () => {
      const { data } = await axios.get<PositionResponse>(`/api/position/${id}`);
      return data.result;
    },
    { enabled: isReady }
  );

  return data ? (
    <Block>
      <Section1>
        <Title>{data.title}</Title>
        <CompanyNameLayout>
          <CompanyName href="/">{data.companyName}</CompanyName>
        </CompanyNameLayout>
        <Tags>
          {data.tags.map((tag) => (
            <li key={tag.id}>
              <Tag href={'/positions?tag=' + tag.id}>#{tag.name}</Tag>
            </li>
          ))}
        </Tags>
      </Section1>
    </Block>
  ) : null;
};

export default JobDescription;

const Block = styled.div`
  position: relative;
  width: 630px;
`;

const Section1 = styled.section`
  border-bottom: 1px solid #eaeaea;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 16px;
  line-height: 1.25;
`;

const CompanyNameLayout = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const CompanyName = styled(Link)`
  font-size: 16px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const Tag = styled(Link)`
  display: inline-block;
  margin: 0 6px 6px 0;
  padding: 5px 15px;
  border: 1px solid #e4e4e4;
  border-radius: 100px;
  color: #444444;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
`;
