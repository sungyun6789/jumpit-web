import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { mont, noto } from '~/pages/_app';

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

      <Section2>
        <dl>
          <Section2Title>기술스택</Section2Title>
          <dd>
            {/* 실서비스와 높이가 달라서 임의로 높이 지정 */}
            <Section2Pre style={{ height: '78px' }}>
              {data.techStacks.map((value) => (
                <TechStack key={value.stack} className={mont.className}>
                  <TechStackImage src={value.imagePath} width={20} height={20} alt="tech stack" />
                  {value.stack}
                </TechStack>
              ))}
            </Section2Pre>
          </dd>
        </dl>

        <dl>
          <Section2Title>주요업무</Section2Title>
          <dd>
            <Section2Pre className={noto.className}>{data.responsibility}</Section2Pre>
          </dd>
        </dl>

        <dl>
          <Section2Title>자격요건</Section2Title>
          <dd>
            <Section2Pre className={noto.className}>{data.qualifications}</Section2Pre>
          </dd>
        </dl>

        <dl>
          <Section2Title>우대사항</Section2Title>
          <dd>
            <Section2Pre className={noto.className}>{data.preferredRequirements}</Section2Pre>
          </dd>
        </dl>

        <dl>
          <Section2Title>복지 및 혜택</Section2Title>
          <dd>
            <Section2Pre className={noto.className}>{data.welfares}</Section2Pre>
          </dd>
        </dl>

        <dl>
          <Section2Title>채용절차 및 기타 지원 유의사항</Section2Title>
          <dd>
            <Section2Pre className={noto.className}>{data.recruitProcess}</Section2Pre>
          </dd>
        </dl>
      </Section2>
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

const Section2 = styled.section`
  margin-top: 48px;

  dl {
    margin-bottom: 56px;
  }
`;

const Section2Title = styled.dt`
  padding-bottom: 12px;
  font-size: 18px;
  color: #000;
  line-height: 32px;
  letter-spacing: -0.5px;
  font-weight: bold;
`;

const Section2Pre = styled.pre`
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
