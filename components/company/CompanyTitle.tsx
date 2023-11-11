import styled from '@emotion/styled';
import Link from 'next/link';
import { useContext } from 'react';
import { CompanyInfoContext } from '~/context/CompanyInfoProvider';

const CompanyTitle = () => {
  const data = useContext(CompanyInfoContext);

  return (
    <Block>
      <Title>{data?.companyName}</Title>
      <div>
        {data?.companyTags.map((tag) => (
          <Tag key={tag.id} href={'/positions?tag=' + tag.id}>
            #{tag.name}
          </Tag>
        ))}
      </div>
    </Block>
  );
};

export default CompanyTitle;

const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 1.25;
`;

const Tag = styled(Link)`
  display: inline-block;
  padding: 5px 16px;
  border: 1px solid #e4e4e4;
  border-radius: 100px;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #444444;
  margin: 0 6px 6px 0;
`;
