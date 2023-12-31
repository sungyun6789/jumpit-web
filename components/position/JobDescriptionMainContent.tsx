import styled from '@emotion/styled';
import Image from 'next/image';
import { useContext } from 'react';
import { JobDescriptionContext } from '~/context/JobDescriptionProvider';
import { mont, noto } from '~/pages/_app';

const JobDescriptionMainContent = () => {
  const data = useContext(JobDescriptionContext);

  if (!data) return null;

  return (
    <Block>
      <dl>
        <Title>기술스택</Title>
        <dd>
          <Content>
            {data.techStacks.map((value) => (
              <TechStack key={value.stack} className={mont.className}>
                <TechStackImage src={value.imagePath} width={20} height={20} alt="tech stack" />
                {value.stack}
              </TechStack>
            ))}
          </Content>
        </dd>
      </dl>

      <dl>
        <Title>주요업무</Title>
        <dd>
          <Content className={noto.className}>{data.responsibility}</Content>
        </dd>
      </dl>

      <dl>
        <Title>자격요건</Title>
        <dd>
          <Content className={noto.className}>{data.qualifications}</Content>
        </dd>
      </dl>

      <dl>
        <Title>우대사항</Title>
        <dd>
          <Content className={noto.className}>{data.preferredRequirements}</Content>
        </dd>
      </dl>

      <dl>
        <Title>복지 및 혜택</Title>
        <dd>
          <Content className={noto.className}>{data.welfares}</Content>
        </dd>
      </dl>

      <dl>
        <Title>채용절차 및 기타 지원 유의사항</Title>
        <dd>
          <Content className={noto.className}>{data.recruitProcess}</Content>
        </dd>
      </dl>
    </Block>
  );
};

export default JobDescriptionMainContent;

const Block = styled.section`
  margin-top: 48px;

  dl {
    margin-bottom: 56px;
  }

  @media (max-width: 1080px) {
    dl {
      margin-bottom: 48px;
    }
  }
`;

const Title = styled.dt`
  padding-bottom: 12px;
  font-size: 18px;
  color: #000;
  line-height: 32px;
  letter-spacing: -0.5px;
  font-weight: bold;
`;

const Content = styled.pre`
  white-space: pre-line;
  word-break: break-all;
  font-size: 16px;
  color: #444444;
  line-height: 28px;
  letter-spacing: -0.5px;
`;

const TechStackImage = styled(Image)`
  position: absolute;
  left: 8px;
  top: 6px;
`;

const TechStack = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 6px 6px 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0;
  color: #000;
  padding: 0 12px 0 34px;
  background-color: #f4f4f4;
  border-radius: 4px;
`;
