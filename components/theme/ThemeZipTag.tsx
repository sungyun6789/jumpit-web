import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { BENEFIT_TAG } from '~/constants/position';

const ThemeZipTag = () => {
  const router = useRouter();

  const onClick = (tag: string) => {
    return router.push({
      pathname: '/positions',
      query: { tag },
    });
  };

  return (
    <Block>
      <Title>테마별 태그🏷️로 포지션 둘러보기</Title>

      <TagWrap>
        {BENEFIT_TAG.map((tag) => (
          // 첫번째 공백만 제거하는 정규표현식 사용
          <Tag key={tag.value} onClick={() => onClick(tag.value)}>
            {tag.label.replace(/\s/, '')}
          </Tag>
        ))}
      </TagWrap>
    </Block>
  );
};

export default ThemeZipTag;

const Block = styled.section`
  max-width: 1060px;
  margin: 0 auto;
  padding-bottom: 180px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.5px;
  color: #222;
  margin-bottom: 16px;
`;

const TagWrap = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.button`
  letter-spacing: -0.5px;
  border-radius: 20px;
  padding: 7px 16px;
  font-size: 15px;
  line-height: 24px;
  border: 1px solid #e4e4e4;
  background-color: #f4f4f4;
  color: #222;
`;
