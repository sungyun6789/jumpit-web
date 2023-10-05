import styled from '@emotion/styled';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { JobDescriptionContext } from '~/context/JobDescriptionProvider';
import { mont, noto } from '~/pages/_app';

import Button from '../common/Button';

const JobDescriptionServiceInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 기업 서비스 소개 이미지 번호
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const data = useContext(JobDescriptionContext);

  if (!data) return null;

  const prev = () => {
    if (currentIndex !== 0) {
      return setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (data?.cacheCompanyImages && data.cacheCompanyImages.length !== currentIndex + 1) {
      return setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Section4>
      <Section4Title>기업/서비스 소개</Section4Title>
      <CompanyImageLayout>
        <PrevImageButton onClick={prev} />
        <NextImageButton onClick={next} />

        {/* @todo: 슬라이드 형태로 변경 */}
        <CompanyImage src={data.cacheCompanyImages[currentIndex].imagePath} width={630} height={441} alt="1" />

        <IndexBox className={mont.className}>
          {currentIndex + 1} / {data.cacheCompanyImages.length}
        </IndexBox>
      </CompanyImageLayout>

      <ServiceInfo className={noto.className}>{data.serviceInfo}</ServiceInfo>
      <MoreInfoButtonWrap>
        {!isMoreInfoOpen && <Empty />}
        <MoreInfoButton isMoreInfoOpen={isMoreInfoOpen} onClick={() => setIsMoreInfoOpen(!isMoreInfoOpen)}>
          기업/서비스 소개 더보기
        </MoreInfoButton>
      </MoreInfoButtonWrap>
    </Section4>
  );
};

export default JobDescriptionServiceInfo;

const Section4 = styled.section`
  margin: 48px 0px 16px;
`;

const Section4Title = styled.h2`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
`;

const ServiceInfo = styled.pre`
  margin-top: 14px;
  font-size: 16px;
  color: #444444;
  line-height: 28px;
  letter-spacing: -0.5px;
  word-break: break-all;
  white-space: pre-line;
  max-height: 168px;
  overflow: hidden;
`;

const MoreInfoButtonWrap = styled.div`
  position: relative;
  padding-top: 16px;
`;

const Empty = styled.div`
  position: absolute;
  width: 100%;
  margin-top: -52px;
  height: 32px;
  background: linear-gradient(rgba(255, 255, 255, 0.5) 0%, rgb(255, 255, 255) 100%);
`;

const MoreInfoButton = styled(Button)<{ isMoreInfoOpen: boolean }>`
  position: relative;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #222222;
  padding: 11px 49px 11px 39px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;

  ::after {
    content: '';
    position: absolute;
    right: 31px;
    top: 18px;
    width: 12px;
    height: 12px;
    background: url('https://www.jumpit.co.kr/App/build/static/media/arrow-down-black.29f49be1.svg') center center
      no-repeat;

    ${(props) =>
      props.isMoreInfoOpen && {
        transform: 'rotate(180deg)',
      }}
  }
`;

const CompanyImageLayout = styled.div`
  position: relative;
`;

const CompanyImage = styled(Image)`
  border-radius: 4px;
  object-fit: cover;
`;

const PrevImageButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 16px;
  background: url('https://www.jumpit.co.kr/App/build/static/media/btn-prev.85cf9174.svg') center center / 32px 32px
    no-repeat;
  width: 32px;
  height: 32px;
  z-index: 1;

  :hover {
    background: url('https://www.jumpit.co.kr/App/build/static/media/btn-prev-hover.9185b56c.svg') center center / 32px
      32px no-repeat;
  }
`;

const NextImageButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 16px;
  background: url('https://www.jumpit.co.kr/App/build/static/media/btn-next.6acd9890.svg') center center / 32px 32px
    no-repeat;
  width: 32px;
  height: 32px;
  z-index: 1;

  :hover {
    background: url('https://www.jumpit.co.kr/App/build/static/media/btn-next-hover.ed6f22cf.svg') center center / 32px
      32px no-repeat;
  }
`;

const IndexBox = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  padding: 6px 8px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
`;
