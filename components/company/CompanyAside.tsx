import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import COLORS from '~/constants/colors';
import { CompanyInfoContext } from '~/context/CompanyInfoProvider';

const CompanyAside = () => {
  const data = useContext(CompanyInfoContext);

  if (!data) return null;

  return (
    <>
      <PCBlock>
        <FlexBox>
          <Logo src={data.companyLogo} width={74} height={74} alt="로고" />
          <Title>{data.companyName}</Title>
          <UL>
            <LI>
              <LikeButton>좋아요</LikeButton>
            </LI>
            <LI>
              <ShareButton>공유</ShareButton>
            </LI>
          </UL>
        </FlexBox>
        <CompanyInfo>
          <DT>업력</DT>
          <DD>{data.companyPeriod} 년차</DD>
          <DT>주요 서비스</DT>
          <DD>
            <ServiceLink href={data.companyService.serviceUrl} target="_blank">
              {data.companyService.serviceName}
            </ServiceLink>
          </DD>
        </CompanyInfo>
      </PCBlock>

      <MobileBlock>
        <FlexBox>
          <Logo src={data.companyLogo} width={74} height={74} alt="로고" />
          <MobileFlexBox>
            <Title>{data.companyName}</Title>
            <UL>
              <LI>
                <LikeButton>좋아요</LikeButton>
              </LI>
              <LI>
                <ShareButton>공유</ShareButton>
              </LI>
            </UL>
          </MobileFlexBox>
        </FlexBox>
        <CompanyInfo>
          <DT>업력</DT>
          <DD>{data.companyPeriod} 년차</DD>
          <DT>주요 서비스</DT>
          <DD>
            <ServiceLink href={data.companyService.serviceUrl} target="_blank">
              {data.companyService.serviceName}
            </ServiceLink>
          </DD>
        </CompanyInfo>
      </MobileBlock>
    </>
  );
};

export default CompanyAside;

const PCBlock = styled.aside`
  width: 340px;
  position: fixed;
  right: calc((100% - 1060px) / 2);
  top: 184px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  padding: 32px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const MobileBlock = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
    padding-top: 24px;
    border-top: 1px solid #eaeaea;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
  }
`;

const MobileFlexBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: unset;f
  }
`;

const Logo = styled(Image)`
  border-radius: 100px;
  border: 1px solid #e4e4e4;

  @media (max-width: 1080px) {
    margin-right: 24px;
    width: 64px;
    height: 64px;
  }
`;

const Title = styled.h2`
  margin: 16px 0 8px;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.5px;

  @media (max-width: 1080px) {
    margin: 0 auto 4px 0;
  }
`;

const UL = styled.ul`
  display: flex;

  li:first-of-type:after {
    content: '';
    position: absolute;
    right: 0;
    top: 8px;
    width: 1px;
    height: 10px;
    background: #eaeaea;
  }

  @media (max-width: 1080px) {
    margin-top: 12px;
  }
`;

const LI = styled.li`
  position: relative;
  padding: 0 16px;

  @media (max-width: 1080px) {
    :first-of-type {
      padding: 0 16px 0 0;
    }
  }
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-decoration-line: underline;
  text-underline-position: under;
  color: #222;
`;

const LikeButton = styled(Button)`
  ::before {
    display: inline-block;
    margin-right: 8px;
    content: '';
    width: 14px;
    height: 14px;
    background: url('https://www.jumpit.co.kr/assets/images/ico_like_off.svg') center center / contain no-repeat;
    vertical-align: -2px;
  }
`;

const ShareButton = styled(Button)`
  ::before {
    display: inline-block;
    margin-right: 8px;
    content: '';
    width: 14px;
    height: 14px;
    background: url('https://www.jumpit.co.kr/assets/images/ic_share.svg') center center / contain no-repeat;
    vertical-align: -2px;
  }
`;

const CompanyInfo = styled.dl`
  width: 276px;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #e4e4e4;
  margin-top: 24px;
  padding-top: 24px;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 26px 0 24px;
  }
`;

const DT = styled.dt`
  flex: 1 1 30%;
  margin: 12px 0;
  color: #666666;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;

  @media (max-width: 1080px) {
    flex: 1 1 11%;
    margin: 6px 0;
  }

  @media (max-width: 600px) {
    flex: 1 1 33%;
  }
`;

const DD = styled.dd`
  flex: 1 1 60%;
  margin: 12px 0;
  color: #444444;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;

  @media (max-width: 1080px) {
    flex: 1 1 80%;
    margin: 6px 0;
  }

  @media (max-width: 600px) {
    flex: 1 1 67%;
  }
`;

const ServiceLink = styled(Link)`
  color: ${COLORS.primary};
  text-decoration: underline;
  text-underline-position: under;
`;
