import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import type { ContentRookieTagResponse } from '~/pages/api/content/rookies/tags';

const defaultTag = {
  id: '',
  name: '전체',
};

interface TagModel {
  id: string | number;
  name: string;
}

const RookieContentTag = () => {
  const [selectedTag, setSelectedTag] = useState<TagModel>();
  const { pathname, query, push } = useRouter();

  const { data } = useQuery(
    ['/api/content/rookies/tags'],
    async () => {
      const { data } = await axios.get<ContentRookieTagResponse>('/api/content/rookies/tags');
      return data;
    },
    { select: (data) => ({ ...data, result: [{ ...defaultTag }, ...data.result] }) }
  );

  useEffect(() => {
    if (data) {
      setSelectedTag(data.result.find((value) => value.id == query.tag) ?? defaultTag);
    }
  }, [data, query]);

  const onClickTag = (value: TagModel) => {
    push({ pathname, query: { ...query, tag: value.id } });
  };

  return (
    <Block>
      <TitleLayout>
        <Title>{selectedTag?.name === '전체' ? '신입개발자' : selectedTag?.name}</Title>
        <TitleDescription>콘텐츠는 여기 다 있어요.</TitleDescription>
      </TitleLayout>

      <TagLayout>
        {data?.result.map((value) => (
          <Tag key={value.id} isSelected={value.id == selectedTag?.id} onClick={() => onClickTag(value)}>
            {value.name}
          </Tag>
        ))}
      </TagLayout>
    </Block>
  );
};

export default RookieContentTag;

const Block = styled.section`
  max-width: 1060px;
  margin: 32px auto 44px;
`;

const TitleLayout = styled.div`
  display: flex;
`;

const Title = styled.h1`
  position: relative;
  font-size: 40px;
  line-height: 72px;
  letter-spacing: -0.5px;

  ::after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 6px;
    height: 2px;
    background-color: rgb(0, 0, 0);
  }
`;

const TitleDescription = styled.span`
  margin-left: 12px;
  font-size: 40px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -0.5px;
`;

const TagLayout = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 947px;
  max-height: 40px;
  overflow-y: hidden;
`;

const Tag = styled.button<{ isSelected: boolean }>`
  margin: 0px 10px 10px 0px;
  padding: 3px 16px;
  font-size: 16px;
  font-family: inherit;
  letter-spacing: -0.5px;
  line-height: 32px;
  color: ${(props) => (props.isSelected ? '#7251f3' : '#444444')};
  border-radius: 20px;
  background-color: #fff;
  border: ${(props) => (props.isSelected ? '1px solid #7251f3' : '1px solid #e4e4e4')};
  cursor: pointer;

  :hover {
    background-color: #f4f4f4;
  }

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
    }}
`;
