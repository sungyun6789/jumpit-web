import styled from '@emotion/styled';
import CompanyOverview from '~/components/company/CompanyOverview';
import CompanyPositionCardList from '~/components/company/CompanyPositionCardList';
import CompanyTitle from '~/components/company/CompanyTitle';
import CompanyInfoProvier from '~/context/CompanyInfoProvider';

const CompanyPage = () => {
  return (
    <Block>
      <CompanyInfoProvier>
        <Content>
          <CompanyTitle />
          <CompanyPositionCardList />
          <CompanyOverview />
        </Content>
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

const Content = styled.div`
  width: 630px;
`;
