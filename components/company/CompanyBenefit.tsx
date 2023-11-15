import styled from '@emotion/styled';
import { useContext } from 'react';
import { CompanyInfoContext } from '~/context/CompanyInfoProvider';

const CompanyBenefit = () => {
  const data = useContext(CompanyInfoContext);

  return <Content>{data?.welfare}</Content>;
};

export default CompanyBenefit;

const Content = styled.pre`
  margin-bottom: 56px;
  white-space: pre-line;
  font-family: inherit;
  color: #444444;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.5px;
`;
