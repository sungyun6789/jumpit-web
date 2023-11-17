import styled from '@emotion/styled';
import Link from 'next/link';
import { useContext } from 'react';
import COLORS from '~/constants/colors';
import { CompanyInfoContext } from '~/context/CompanyInfoProvider';

const CompanyAddress = () => {
  const data = useContext(CompanyInfoContext);
  const companyAddress = data?.companyAddress;

  const copyUrlToClipboard = async () => {
    if (companyAddress) {
      await window.navigator.clipboard.writeText(companyAddress);
      alert('주소가 복사되었습니다');
    }
  };

  return (
    <Block>
      <Title>대표 주소</Title>
      <UL>
        <LI>{companyAddress}</LI>
        <LI>
          <MAPView href={`https://m.map.naver.com/search2/search.naver?query=${companyAddress}#/map`} target="_blank">
            지도보기
          </MAPView>
          <Spot>·</Spot>
          <CopyAddress onClick={copyUrlToClipboard}>주소복사</CopyAddress>
        </LI>
      </UL>
    </Block>
  );
};

export default CompanyAddress;

const Block = styled.section`
  border-top: 1px solid #e4e4e4;
  padding-top: 40px;
  margin-bottom: 56px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
`;

const UL = styled.ul`
  font-size: 16px;
  letter-spacing: -0.5px;
  color: #444444;
`;

const LI = styled.li`
  line-height: 28px;
  font-size: 16px;
  letter-spacing: -0.5px;
`;

const MAPView = styled(Link)`
  color: #888888;
  line-height: 24px;

  ::before {
    content: '';
    display: inline-block;
    margin-right: 2px;
    width: 16px;
    height: 16px;
    vertical-align: -3px;
    background: url('https://cdn.jumpit.co.kr/jumpit/personal/ico_map.png') 50% 50% / contain no-repeat;
  }
`;

const Spot = styled.span`
  padding: 0 10px;
`;

const CopyAddress = styled.button`
  color: ${COLORS.primary};
  font-size: 16px;

  ::before {
    content: '';
    display: inline-block;
    margin-right: 2px;
    width: 16px;
    height: 16px;
    vertical-align: -3px;
    background: url('https://cdn.jumpit.co.kr/jumpit/personal/ico_copy.png') 50% 50% / contain no-repeat;
  }
`;
