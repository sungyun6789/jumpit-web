import styled from '@emotion/styled';
import CompanyInfoProvier from '~/context/CompanyInfoProvider';

const CompanyPage = () => {
  return (
    <Block>
      <CompanyInfoProvier>
        <div>회사 상세 페이지</div>
      </CompanyInfoProvier>
    </Block>
  );
};

export default CompanyPage;

const Block = styled.section`
  position: relative;
  padding: 60px 0 80px;
  max-width: 1060px;
  margin: 0 auto;
`;
