import JobDescriptionLayout from '~/components/layout/JobDescriptionLayout';
import JobDescription from '~/components/position/JobDescription';
import JobDescriptionTopBanner from '~/components/position/JobDescriptionTopBanner';
import JobDescriptionProvier from '~/context/JobDescriptionProvider';

const PositionPage = () => {
  return (
    <JobDescriptionProvier>
      <JobDescriptionTopBanner />
      <JobDescriptionLayout>
        <JobDescription />
      </JobDescriptionLayout>
    </JobDescriptionProvier>
  );
};

export default PositionPage;
