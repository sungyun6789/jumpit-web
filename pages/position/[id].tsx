import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import JobDescription from '~/components/position/JobDescription';
import JobDescriptionAside from '~/components/position/JobDescriptionAside';
import JobDescriptionEvent from '~/components/position/JobDescriptionEvent';
import JobDescriptionHead from '~/components/position/JobDescriptionHead';
import JobDescriptionMobileBanner from '~/components/position/JobDescriptionMobileBanner';
import SimilarPositionList from '~/components/position/SimilarPositionList';
import JobDescriptionProvier from '~/context/JobDescriptionProvider';

/**
 * @description
 * 실제 서비스에서는 클릭수를 업데이트하는 count-up api가 존재하는데 여기서는 별도로 구현하지 않음
 */
const PositionPage = () => {
  const [height, setHeight] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const timer = setTimeout(() => {
      const div = document.querySelector('.jd');
      if (div) {
        const ch = div.scrollHeight;
        setHeight(ch);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <>
      <JobDescriptionProvier>
        <JobDescriptionHead />
        <JobDescriptionEvent />
        <Block>
          <div className="jd">
            <JobDescription />
          </div>
          <JobDescriptionAside contentHeight={height} />
        </Block>
      </JobDescriptionProvier>
      <SimilarPositionList />
      <JobDescriptionMobileBanner />
    </>
  );
};

export default PositionPage;

const Block = styled.div`
  position: relative;
  padding: 60px 0 24px;
  max-width: 1060px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    padding: 40px 0 110px;
  }

  @media (max-width: 600px) {
    padding: 32px 0 80px;
  }
`;
