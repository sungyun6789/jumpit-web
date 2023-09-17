import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { RookieCodeInitializeContext } from '~/pages/rookie/position';

const RookiePositionTag = () => {
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
    push({ query: { curation: id } });
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

      <TagLayout>
        {curations.map(({ id, emoticon, name }) => (
          <Tag key={name} isSelected={id.toString() === queryCuration} onClick={() => onClickTag(id)}>
            {emoticon + ' ' + name}
          </Tag>
        ))}
      </TagLayout>
    </Block>
  );
};

export default RookiePositionTag;

const Block = styled.section`
  max-width: 1060px;
  margin: 32px auto 60px;
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 72px;
  letter-spacing: -0.5px;
`;

const SubTitle = styled.h3`
  color: #666666;
  font-size: 16px;
  font-weight: normal;
  line-height: 23px;
  letter-spacing: -0.5px;
`;

const TitleTagUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 8px;
  margin-bottom: 24px;
`;

const TitleTagLi = styled.li`
  color: #7251f3;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5px;
`;

const TagLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 947px;
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
`;
