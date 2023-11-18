import styled from '@emotion/styled';
import CompanyAddress from '~/components/company/CompanyAddress';
import CompanyAside from '~/components/company/CompanyAside';
import CompanyBenefit from '~/components/company/CompanyBenefit';
import CompanyHead from '~/components/company/CompanyHead';
import CompanyOverview from '~/components/company/CompanyOverview';
import CompanyPositionCardList from '~/components/company/CompanyPositionCardList';
import CompanyRecommendTagList from '~/components/company/CompanyRecommendTagList';
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
          <CompanyBenefit />
          <CompanyAside />
          <CompanyAddress />
        </Content>
      </Block>
      <CompanyRecommendTagList />
    </CompanyInfoProvier>
  );
};

export default CompanyPage;

const Block = styled.section`
  position: relative;
  padding: 60px 0 80px;
  max-width: 1060px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    padding: 40px 0 100px;
  }

  @media (max-width: 600px) {
    padding: 32px 0 44px;
  }
`;

const Content = styled.div`
  width: 630px;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: calc(100% - 32px);
    margin: 0 16px;
  }
`;
