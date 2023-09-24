import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import type { Content } from '~/pages/api/content/rookies';

interface Props {
  content: Content;
}

const RookieContentCard = ({ content }: Props) => {
  return (
    <Block href={`/contents/${content.id}`}>
      <ImageBox>
        <CardImage src={content.imagePath} width={340} height={226} alt="content" />
      </ImageBox>

      <Title>{content.title}</Title>

      <Tags>
        {content.tags.map((tag) => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
      </Tags>
    </Block>
  );
};

export default RookieContentCard;

const Block = styled(Link)`
  width: 340px;
  margin: 10px 10px 46px;
  cursor: pointer;

  :hover {
    h2 {
      text-decoration: underline;
    }
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 226px;
  overflow: hidden;
`;

const CardImage = styled(Image)`
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  object-fit: cover;
  transition: all 0.3s ease 0s;

  :hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h2`
  margin-top: 16px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.5px;
  // 아래는 길어지는 텍스트를 숨기기 위한 스타일
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tags = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  max-height: 60px;
  overflow-y: hidden;
  list-style: none;
`;

const Tag = styled.li`
  margin: 0 6px 6px 0;
  color: #666666;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.5px;
  padding: 3px 8px;
  background-color: #f5f5f8;
  border-radius: 4px;
`;
