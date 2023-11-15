import styled from '@emotion/styled';
import CompanyHead from '~/components/company/CompanyHead';
import CompanyOverview from '~/components/company/CompanyOverview';
import CompanyPositionCardList from '~/components/company/CompanyPositionCardList';
import CompanyTechStack from '~/components/company/CompanyTechStack';
import CompanyTitle from '~/components/company/CompanyTitle';
import CompanyInfoProvier from '~/context/CompanyInfoProvider';

const CompanyPage = () => {
  return (
    <CompanyInfoProvier>
      <CompanyHead />
      <Block>
        <Content>
          <CompanyTitle />
          <CompanyPositionCardList />
          <CompanyTechStack />
          <CompanyOverview />
        </Content>
      </Block>
    </CompanyInfoProvier>
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
