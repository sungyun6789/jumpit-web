import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { noto } from '~/pages/_app';

import Button from '../common/Button';

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
  const [isOpen, setIsOpen] = useState(false);
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

      <TagAndAllViewLayout>
        <TagLayout isOpen={isOpen}>
          {data?.result.map((value) => (
            <Tag key={value.id} isSelected={value.id == selectedTag?.id} onClick={() => onClickTag(value)}>
              {value.name}
            </Tag>
          ))}
        </TagLayout>

        <AllView className={noto.className} isOpen={isOpen}>
          <AllViewText onClick={() => setIsOpen(!isOpen)}>{isOpen ? '접기' : '전체보기'}</AllViewText>
          <Image src="/bottomArrow.svg" width={16} height={16} alt="all view" />
        </AllView>
      </TagAndAllViewLayout>
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

const TagAndAllViewLayout = styled.div`
  margin-top: 20px;
  position: relative;
`;

const TagLayout = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-wrap: wrap;
  max-width: 947px;
  max-height: ${(props) => (props.isOpen ? '100%' : '40px')};
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

const AllView = styled(Button)<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  bottom: ${(props) => (props.isOpen ? '24px' : '15px')};
  right: 0;
  color: ${(props) => (props.isOpen ? '#222222' : '#888888')};

  :hover {
    span {
      text-decoration: underline;
    }
  }

  ${(props) =>
    props.isOpen && {
      img: {
        transform: 'rotate(-180deg)',
      },
      span: {
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
      },
    }}
`;

const AllViewText = styled.span`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.5px;
`;
