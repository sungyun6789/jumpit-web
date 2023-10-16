import styled from '@emotion/styled';
import Link from 'next/link';

const JobDescriptionMobileBanner = () => {
  return (
    <Block>
      <StyledLink href="/event/notification">
        <Banner />
      </StyledLink>
    </Block>
  );
};

export default JobDescriptionMobileBanner;

const Block = styled.div`
  display: none;
  width: 100%;
  height: 96px;

  @media (max-width: 1080px) {
    margin-bottom: 120px;
    display: block;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  display: inline-block;
`;

const Banner = styled.div`
  @media (max-width: 1080px) {
    background: url(//cdn.jumpit.co.kr/jumpit/banner/position_view/event_notification_t.webp) 0% 0% / 100% 96px
      no-repeat;
    width: 100%;
    height: 96px;
    margin: 10px auto;
  }

  @media (max-width: 600px) {
    background: url(//cdn.jumpit.co.kr/jumpit/banner/position_view/event_notification_m.webp) 0% 0% / 100% 96px
      no-repeat;
  }
`;
