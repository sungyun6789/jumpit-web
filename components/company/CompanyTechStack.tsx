import styled from '@emotion/styled';
import Image from 'next/image';
import { useContext } from 'react';
import { CompanyInfoContext } from '~/context/CompanyInfoProvider';
import { mont } from '~/pages/_app';

const CompanyTechStack = () => {
  const data = useContext(CompanyInfoContext);

  return (
    <Block>
      <Title>기술스택</Title>

      <List>
        {data?.techStacks.map((techStack) => (
          <Tag key={techStack.stack} className={mont.className}>
            <TechStackImage src={techStack.imagePath} width={20} height={20} alt="기술 스택 로고" />
            {techStack.stack}
          </Tag>
        ))}
      </List>
    </Block>
  );
};

export default CompanyTechStack;

const Block = styled.div`
  margin-bottom: 56px;
`;

const Title = styled.h2`
  padding-bottom: 12px;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.5px;
  font-weight: bold;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  line-height: 32px;
  padding: 0 12px 0 34px;
  background-color: #f4f4f4;
  border-radius: 4px;
  font-weight: 500;
`;

const TechStackImage = styled(Image)`
  display: inline-block;
  position: absolute;
  top: 6px;
  left: 8px;
`;
