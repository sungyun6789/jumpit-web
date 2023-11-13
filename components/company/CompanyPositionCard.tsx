import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import COLORS from '~/constants/colors';
import { mont } from '~/pages/_app';

interface Props {
  data: {
    id: number;
    title: string;
    companyName: string;
    imagePath: string;
    closedAt: string;
    alwaysOpen: boolean;
    scraped: boolean;
    celebration: number;
    techStacks: string[];
  };
}

const CompanyPositionCard = ({ data }: Props) => {
  const startDate = new Date();
  const endDate = new Date(data.closedAt);
  const deadline = Math.ceil((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)) - 1;

  return (
    <Block>
      <Link href={`/position/${data.id}`} target="_blank">
        <CardHeader>
          <PositionDeadline>{data.alwaysOpen ? '상시' : `D - ${deadline}`}</PositionDeadline>
          <Image src="/bookmark.svg" width={16} height={16} alt="북마크" />
        </CardHeader>

        <Title>{data.title}</Title>

        <TechStackWrap>
          {data.techStacks.map((techStack, index) => (
            <TechStack key={techStack} className={mont.className}>
              {index !== 0 && '· '}
              {techStack}
            </TechStack>
          ))}
        </TechStackWrap>
      </Link>
    </Block>
  );
};

export default CompanyPositionCard;

const Block = styled.div`
  padding: 24px;
  max-width: 307px;
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid #e4e4e4;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PositionDeadline = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: ${COLORS.primary};
`;

const Title = styled.h2`
  margin: 16px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TechStackWrap = styled.ul`
  height: 18px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #999;
  gap: 5px;
`;

const TechStack = styled.li`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #999;
`;
