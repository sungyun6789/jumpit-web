import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { Content } from '~/pages/api/content/rookies';

interface Props {
  data: Content;
}

const FeedCard = ({ data }: Props) => {
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: number) => {
    e.preventDefault();
    router.push({ query: { tag: id } });
  };

  return (
    <Block href={data.url}>
      <BannerWrap>
        <Banner src={data.imagePath} width={338} height={224} alt="피드 배너 이미지" />
      </BannerWrap>
      <Title>{data.title}</Title>

      <TagWrap>
        {data.tags.map((tag) => (
          <Tag key={tag.id} onClick={(e) => onClick(e, Number(tag.id))}>
            {tag.name}
          </Tag>
        ))}
      </TagWrap>
    </Block>
  );
};

export default FeedCard;

const Block = styled(Link)`
  width: 340px;

  margin: 10px 10px 46px;
  cursor: pointer;

  :hover {
    img {
      transform: scale(1.2);
    }

    h2 {
      text-decoration: underline;
    }
  }

  @media (max-width: 1080px) {
    max-width: calc(50% - 16px);
    flex: 1 1 40%;
    margin: 8px 8px 32px;
  }

  @media (max-width: 600px) {
    margin: 0 auto;
    padding: 10px 0 18px;
    width: calc(100% - 32px);
    max-width: unset;
    flex: unset;
  }
`;

const BannerWrap = styled.div`
  width: 100%;
  height: 226px;
  overflow: hidden;
  border-radius: 4px;
`;

const Banner = styled(Image)`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease 0s;
  object-fit: cover;
`;

const Title = styled.h2`
  margin-top: 16px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.5px;

  /* 아래는 말줄임 처리에 필요한 스타일 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TagWrap = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
`;

const Tag = styled.li`
  margin: 0px 6px 6px 0px;
  color: #666666;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.5px;
  padding: 3px 8px;
  background-color: #f5f5f8;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #e9e9e9;
  }
`;
