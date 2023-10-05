import JobDescriptionLayout from '~/components/layout/JobDescriptionLayout';
import JobDescription from '~/components/position/JobDescription';
import JobDescriptionProvier from '~/context/JobDescriptionProvider';

const PositionPage = () => {
  return (
    <JobDescriptionProvier>
      <JobDescriptionLayout>
        <JobDescription />
      </JobDescriptionLayout>
    </JobDescriptionProvier>
  );
};

export default PositionPage;
