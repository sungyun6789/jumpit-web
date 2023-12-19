import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import COLORS from '~/constants/colors';
import type { ContentRookieTagResponse } from '~/pages/api/content/rookies/tags';

const FeedTagList = () => {
  const router = useRouter();
  const selectedTag = router.query.tag;

  const { data } = useQuery(
    ['/api/content/rookies/tags'],
    async () => {
      const { data } = await axios.get<ContentRookieTagResponse>('/api/content/rookies/tags');
      return data.result;
    },
    { select: (result) => [...[{ id: undefined, name: '전체' }], ...result] }
  );

  const onClick = (id: number | undefined) => {
    if (id) {
      return router.push({ pathname: router.pathname, query: { tag: id } });
    }
    return router.push('/feed');
  };

  return (
    <Block>
      <Title>#해시태그로 골라보는 피드👀</Title>

      <TagWrap>
        {data?.map((tag) => (
          <Tag key={tag.name} isSelected={selectedTag == tag.id} onClick={() => onClick(tag.id)}>
            {tag.name}
          </Tag>
        ))}
      </TagWrap>
    </Block>
  );
};

export default FeedTagList;

const Block = styled.section`
  max-width: 1060px;
  margin: 32px auto 44px;

  @media (max-width: 1080px) {
    margin: 32px 16px 30px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -0.5px;
  color: #222;

  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 46px;
  }
`;

const TagWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-wrap: nowrap;
    max-width: unset;
    height: 100%;
    max-height: 50px;
    overflow-x: scroll;
  }
`;

const Tag = styled.button<{ isSelected: boolean }>`
  margin: 0 10px 10px 0;
  padding: 3px 16px;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.5px;
  border-radius: 20px;
  color: #444;
  border: 1px solid #e4e4e4;
  background-color: #fff;
  outline: none;

  ${(props) =>
    !props.isSelected && {
      ':hover': {
        backgroundColor: '#f4f4f4',
      },
    }};

  ${(props) =>
    props.isSelected && {
      color: '#fff',
      border: `1px solid ${COLORS.primary}`,
      backgroundColor: COLORS.primary,
      fontWeight: 'bold',
    }};

  @media (max-width: 1080px) {
    margin: 0px 7px 10px 0px;
  }

  @media (max-width: 600px) {
    margin: 0 8px 8px 0;
    flex: 0 0 auto;
  }
`;
