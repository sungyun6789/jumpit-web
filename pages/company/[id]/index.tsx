import styled from '@emotion/styled';
import CompanyTitle from '~/components/company/CompanyTitle';
import CompanyInfoProvier from '~/context/CompanyInfoProvider';

const CompanyPage = () => {
  return (
    <Block>
      <CompanyInfoProvier>
        <CompanyTitle />
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
