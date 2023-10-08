import JobDescriptionLayout from '~/components/layout/JobDescriptionLayout';
import JobDescription from '~/components/position/JobDescription';
import JobDescriptionAside from '~/components/position/JobDescriptionAside';
import JobDescriptionTopBanner from '~/components/position/JobDescriptionTopBanner';
import SimilarPositionList from '~/components/position/SimilarPositionList';
import JobDescriptionProvier from '~/context/JobDescriptionProvider';

/**
 * @description
 * 실제 서비스에서는 클릭수를 업데이트하는 count-up api가 존재하는데 여기서는 별도로 구현하지 않음
 */
const PositionPage = () => {
  return (
    <>
      <JobDescriptionProvier>
        <JobDescriptionTopBanner />
        <JobDescriptionLayout>
          <JobDescription />
          <JobDescriptionAside />
        </JobDescriptionLayout>
      </JobDescriptionProvier>
      <SimilarPositionList />
    </>
  );
};

export default PositionPage;
