import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const TITLE_TAGS = ['신입', '경력1~3년', '개발자', '첫취업', '첫이직'];

const TAGS = [
  { label: '전체', value: '' },
  { label: '⌨️ Java로 웹개발', value: '1' },
  { label: '⚙️ Python으로 웹개발', value: '15' },
  { label: '🖥️ Javascript로 웹개발', value: '16' },
  { label: '📱 나도 할래 앱개발자', value: '4' },
  { label: '🚀 누적 투자금 100억↑ 스타트업', value: '18' },
  { label: '🏠 일하는 곳이 곧 회사', value: '6' },
  { label: '🧢 뭘입지 고민 NO, 자유복장', value: '7' },
];

const RookiePositionTag = () => {
  const { query, push } = useRouter();

  const selectedCuration = query.curation;

  return (
    <Block>
      <Title>전체</Title>
      <SubTitle>신입개발자를 위한 포지션을 확인하세요.</SubTitle>
      <TitleTagUl>
        {TITLE_TAGS.map((titleTag) => (
          <TitleTagLi key={titleTag}>#{titleTag}</TitleTagLi>
        ))}
      </TitleTagUl>

      <TagLayout>
        {TAGS.map(({ label, value }) => (
          <Tag key={label} isSelected={value === selectedCuration} onClick={() => push({ query: { curation: value } })}>
            {label}
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
