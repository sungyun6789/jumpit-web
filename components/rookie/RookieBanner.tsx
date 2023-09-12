import styled from '@emotion/styled';

const RookieBanner = () => {
  return (
    <Block>
      <Banner />
    </Block>
  );
};

export default RookieBanner;

const Block = styled.section`
  background-color: #0e0e0e;
`;

const Banner = styled.div`
  position: relative;
  max-width: 1060px;
  height: 300px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    height: 260px;
  }

  ::before {
    content: '';
    position: absolute;
    top: 60px;
    left: 0;
    width: 454px;
    height: 182px;
    background: url('//cdn.jumpit.co.kr/jumpit/personal/rookie_home_title_2.svg') center center / cover no-repeat;

    @media (max-width: 1080px) {
      top: 56px;
      left: 30px;
      width: 419px;
      height: 148px;
      background: url('//cdn.jumpit.co.kr/jumpit/personal/rookie_home_title_t_2.svg') center center no-repeat;
    }

    @media (max-width: 600px) {
      top: 30px;
      left: 24px;
      width: 256px;
      height: 158px;
      background: url('//cdn.jumpit.co.kr/jumpit/personal/rookie_home_title_m_2.svg') center center no-repeat;
    }
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: -150px;
    width: 699px;
    height: 300px;
    background: url('//cdn.jumpit.co.kr/jumpit/personal/rookie_home_visual.svg') center center / cover no-repeat;

    @media (max-width: 1080px) {
      right: -6px;
      width: 477px;
      height: 260px;
      background: url('//cdn.jumpit.co.kr/jumpit/personal/rookie_home_visual_t.svg') center center no-repeat;
    }

    @media (max-width: 600px) {
      top: unset;
      bottom: -4px;
      right: -26px;
      width: 240px;
      height: 167px;
      background: url('//cdn.jumpit.co.kr/jumpit/personal/rookie_home_visual_m.svg') center center no-repeat;
    }
  }
`;
