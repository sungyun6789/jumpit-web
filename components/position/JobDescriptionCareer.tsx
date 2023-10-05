import styled from '@emotion/styled';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useContext } from 'react';
import COLORS from '~/constants/colors';
import { JobDescriptionContext } from '~/context/JobDescriptionProvider';

import Button from '../common/Button';

const JobDescriptionCareer = () => {
  const data = useContext(JobDescriptionContext);

  if (!data) return null;

  const copyTextToClipboard = async (str: string) => {
    await window.navigator.clipboard.writeText(str);
    alert('주소가 복사되었습니다');
  };

  return (
    <Block>
      <SectionDL>
        <Label>경력</Label>
        <dt>
          {data.minCareer === 0 && '신입'}
          {data.maxCareer === 1 ? null : `~${data.maxCareer}년`}
        </dt>
      </SectionDL>

      <SectionDL>
        <Label>학력</Label>
        <dt>{data.education === 1 ? '무관' : `대학교졸업(${data.education}년) 이상(졸업예정자 가능)`}</dt>
      </SectionDL>

      <SectionDL>
        <Label>마감일</Label>
        <dt>{dayjs(data.closedAt).format('YYYY-MM-DD')}</dt>
      </SectionDL>

      <SectionDL>
        <Label>근무지역</Label>
        <WorkingPlace>
          {data.workingPlaces[0].address}
          <Btns>
            <MapLink
              href={'https://m.map.naver.com/search2/search.naver?query=' + data.workingPlaces[0].address}
              target="_blank"
            >
              지도보기
            </MapLink>
            <BetweenIcon>·</BetweenIcon>
            <CopyButton onClick={() => copyTextToClipboard(data.workingPlaces[0].address ?? '')}>주소복사</CopyButton>
          </Btns>
        </WorkingPlace>
      </SectionDL>
    </Block>
  );
};

export default JobDescriptionCareer;

const Block = styled.section`
  padding: 32px 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
`;

const SectionDL = styled.dl`
  display: flex;
  align-items: baseline;
  font-size: 15px;
  color: #444444;
  line-height: 20px;
  letter-spacing: 0;
  margin: 10px 0;
`;

const Label = styled.dt`
  line-height: 24px;
  color: #000;
  font-weight: 500;
  width: 90px;
`;

const WorkingPlace = styled.div`
  line-height: 20px;
`;

const Btns = styled.p`
  margin-top: 4px;
`;

const MapLink = styled(Link)`
  color: #888888;
  line-height: 24px;

  ::before {
    display: inline-block;
    margin-right: 2px;
    width: 16px;
    height: 16px;
    vertical-align: -3px;
    background: url('https://cdn.jumpit.co.kr/jumpit/personal/ico_map.png') 50% 50% / contain no-repeat;
    content: '';
  }
`;

const BetweenIcon = styled.span`
  padding: 0 10px;
  color: #222222;
`;

const CopyButton = styled(Button)`
  color: ${COLORS.primary};
  font-size: 16px;

  ::before {
    display: inline-block;
    margin-right: 2px;
    width: 16px;
    height: 16px;
    vertical-align: -3px;
    background: url('https://cdn.jumpit.co.kr/jumpit/personal/ico_copy.png') 50% 50% / contain no-repeat;
    content: '';
  }
`;
