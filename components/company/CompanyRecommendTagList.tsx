import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { CompanyServicePositionResponse } from '~/pages/api/company/[id]/service/position';

const CompanyRecommendTagList = () => {
  const { query } = useRouter();
  const companyId = query.id;

  const { data } = useQuery(
    [`/company/${companyId}/service/position`],
    async () => {
      const { data } = await axios.get<CompanyServicePositionResponse>(`/api/company/${companyId}/service/position`);
      return data.result;
    },
    { enabled: !!companyId }
  );

  return (
    <Block>
      <Layout>
        <Title>추천태그</Title>
        <List>
          {data?.recommendTag.map((tag) => (
            <Link key={tag.id} href={`/positions?tag=${tag.id}`}>
              <Tag>#{tag.name}</Tag>
            </Link>
          ))}
        </List>
      </Layout>
    </Block>
  );
};

export default CompanyRecommendTagList;

const Block = styled.section`
  background-color: #fbfbfd;
`;

const Layout = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 0 56px;

  @media (max-width: 1080px) {
    padding: 40px 16px 56px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

// const TagLink = styled(Link)``;

const Tag = styled.li`
  margin: 0 10px 10px 0;
  padding: 3px 16px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 100px;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.5px;
`;
