import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { RookieCodeInitializeContext } from '~/pages/rookie/position';

import RookieMobileCurationSelectModal from '../modal/RookieMobileCurationSelectModal';

const RookiePositionTag = () => {
  const [isMCurationView, setIsMCurationView] = useState(false);
  const { query, push } = useRouter();
  const data = useContext(RookieCodeInitializeContext);

  const allCuration = {
    emoticon: '',
    explain: '신입개발자를 위한 포지션을 확인하세요.',
    id: '',
    name: '전체',
    tags: ['#신입', '#경력1~3년', '#개발자', '#첫취업', '#첫이직'],
  };

  const curations = [allCuration, ...(data?.curation ?? [])];

  const queryCuration = query.curation;
  const selectedCurationInfo = curations.find((value) => value.id.toString() === queryCuration);

  const onClickTag = (id: number | string) => {
    push({ query: { curation: id ?? '' } });
  };

  const close = () => {
    setIsMCurationView(false);
  };

  return (
    <Block>
      <Title>{selectedCurationInfo?.name}</Title>
      <SubTitle>신입개발자를 위한 포지션을 확인하세요.</SubTitle>
      <TitleTagUl>
        {selectedCurationInfo?.tags.map((tag) => (
          <TitleTagLi key={tag}>{tag}</TitleTagLi>
        ))}
      </TitleTagUl>

      <PCTagLayout>
        {curations.map(({ id, emoticon, name }) => (
          <Tag key={name} isSelected={id == queryCuration} onClick={() => onClickTag(id)}>
            {emoticon + ' ' + name}
          </Tag>
        ))}
      </PCTagLayout>

      <MTagLayout>
        <MTagRow>
          {curations.slice(0, 5).map(({ id, emoticon, name }) => (
            <Tag key={name} isSelected={id == queryCuration} onClick={() => onClickTag(id)}>
              {emoticon + ' ' + name}
            </Tag>
          ))}
        </MTagRow>

        <MTagRow>
          {curations.slice(5, curations.length).map(({ id, emoticon, name }) => (
            <Tag key={name} isSelected={id == queryCuration} onClick={() => onClickTag(id)}>
              {emoticon + ' ' + name}
            </Tag>
          ))}
        </MTagRow>
      </MTagLayout>

      <MLayout>
        <AllText onClick={() => setIsMCurationView(true)}>전체보기</AllText>

        {isMCurationView && (
          <RookieMobileCurationSelectModal
            queryCuration={queryCuration}
            curations={curations}
            close={close}
            click={onClickTag}
          />
        )}
      </MLayout>
    </Block>
  );
};

export default RookiePositionTag;

const Block = styled.section`
  max-width: 1060px;
  margin: 32px auto 60px;

  @media (max-width: 1080px) {
    margin: 28px 16px 48px;
  }

  @media (max-width: 600px) {
    margin: 32px 16px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 72px;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

const SubTitle = styled.h3`
  color: #666666;
  font-size: 16px;
  font-weight: normal;
  line-height: 23px;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    margin-top: 12px;
    font-size: 15px;
    line-height: 22px;
  }
`;

const TitleTagUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 8px;
  margin-bottom: 24px;

  @media (max-width: 1080px) {
    margin-bottom: 28px;
  }
`;

const TitleTagLi = styled.li`
  color: #7251f3;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const PCTagLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 947px;

  @media (max-width: 1080px) {
    max-width: 660px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const MTagLayout = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: list-item;
    overflow-x: scroll;

    /* 전체 스크롤바 */
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    /* 드래그 가능한 스크롤바, 현재 위치를 보여주는 스크롤바 */
    ::-webkit-scrollbar-thumb {
      background-color: rgb(221, 221, 221);
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }

    /* 스크롤바가 움직일 수 있는 영역 전체 */
    ::-webkit-scrollbar-track {
      background-color: rgb(250, 250, 250);
      border-radius: 10px;
    }
  }
`;

const MTagRow = styled.div`
  display: flex;
  white-space: nowrap;
`;

const MLayout = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const AllText = styled.span`
  color: #888888;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.5px;
  position: relative;
  bottom: -5px;
`;

const Tag = styled.button<{ isSelected: boolean }>`
  margin: 0 10px 10px 0;
  padding: 3px 16px;
  line-height: 32px;
  letter-spacing: -0.5px;
  border-radius: 20px;
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
  border: ${(props) => (props.isSelected ? '1px solid #7251f3' : '1px solid #e4e4e4')};
  color: ${(props) => (props.isSelected ? '#7251f3' : '#444444')};
  background-color: #fff;
  font-size: 16px;
  font-family: inherit;
  cursor: pointer;

  :hover {
    background-color: #f4f4f4;
  }

  @media (max-width: 1080px) {
    margin: 0 7px 10px 0;
  }

  @media (max-width: 600px) {
    margin: 0 8px 8px 0;
    font-size: 15px;
    line-height: 22px;
    padding: 6px 16px;
  }
`;
