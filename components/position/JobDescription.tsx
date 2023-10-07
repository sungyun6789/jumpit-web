import styled from '@emotion/styled';

import JobDescriptionCareer from './JobDescriptionCareer';
import JobDescriptionHeader from './JobDescriptionHeader';
import JobDescriptionMainContent from './JobDescriptionMainContent';
import JobDescriptionServiceInfo from './JobDescriptionServiceInfo';

const JobDescription = () => {
  return (
    <Block>
      <JobDescriptionHeader />
      <JobDescriptionMainContent />
      <JobDescriptionCareer />
      <JobDescriptionServiceInfo />
    </Block>
  );
};

export default JobDescription;

const Block = styled.div`
  position: relative;
  width: 630px;

  @media (max-width: 1080px) {
    width: auto;
    margin: 0 16px;
  }
`;
