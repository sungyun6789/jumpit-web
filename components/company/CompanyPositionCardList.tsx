import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import COLORS from '~/constants/colors';

import CompanyPositionCard from './CompanyPositionCard';

import type { CompanyPositionResponse } from '~/pages/api/company/[id]/position';

const CompanyPositionCardList = () => {
  const { query } = useRouter();
  const companyId = query.id as string;
  const [isPositionListOpen, setIsPositionListOpen] = useState(false);

  const { data } = useQuery(
    [`/company/${companyId}/position`],
    async () => {
      const { data } = await axios.get<CompanyPositionResponse>(`/api/company/${companyId}/position`);
      return data.result;
    },
    { enabled: !!companyId }
  );

  const positionList = isPositionListOpen ? data : data?.slice(0, 4);

  const onClickPositionSeeMore = () => setIsPositionListOpen(!isPositionListOpen);

  return (
    <Block>
      <Title>
        채용 중인 포지션
        <PositionLength> {data?.length}</PositionLength>
      </Title>

      <CardWrap>
        {positionList?.map((value) => (
          <CompanyPositionCard key={value.id} data={value} />
        ))}
      </CardWrap>

      <PositionListSeeMore onClick={onClickPositionSeeMore}>
        {isPositionListOpen ? '채용 중인 포지션 접기' : '채용 중인 포지션 더보기'}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z"></path>
            {isPositionListOpen ? (
              <path stroke="#222" strokeWidth="1.5" d="m3 10 5-5 5 5"></path>
            ) : (
              <path stroke="#222" strokeWidth="1.5" d="m3 6 5 5 5-5"></path>
            )}
          </g>
        </svg>
      </PositionListSeeMore>
    </Block>
  );
};

export default CompanyPositionCardList;

const Block = styled.section`
  margin: 64px 0 40px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.5px;
`;

const PositionLength = styled.span`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.5px;
  color: ${COLORS.primary};
`;

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PositionListSeeMore = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 11px 0;
  border: 1px solid #e4e4e4;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #222;
`;
