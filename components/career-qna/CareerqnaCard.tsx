import styled from '@emotion/styled';
import dayjs from 'dayjs';

import type { CareerqnaContent } from '~/pages/api/content/career-qna/posts';

const TODAY = dayjs(new Date()).format('YYYY-MM-DDTHH:mm:ss');

interface Props {
  data: CareerqnaContent;
}

const CareerqnaCard = ({ data }: Props) => {
  const diffDay = dayjs(TODAY).diff(data.createdAt, 'day');
  const createdAt = diffDay > 30 ? `${Math.floor(diffDay / 30)}달 전` : `${diffDay}일 전`;

  return (
    <Card key={data.id}>
      <TagWrap>
        <Tag> {`${data.category.categoryEmoticon} ${data.category.categoryName}`}</Tag>
        <Title>{data.title}</Title>
        <Content>{data.contents}</Content>

        <ContentInfoWrap>
          <ID>{data.writer}</ID>
          <CreatedDate>{createdAt}</CreatedDate>
        </ContentInfoWrap>
      </TagWrap>
    </Card>
  );
};

export default CareerqnaCard;

const Card = styled.div`
  width: 100%;
  padding: 0 24px;
  cursor: pointer;

  :hover {
    h2 {
      text-decoration: underline;
    }
  }

  @media (max-width: 1080px) {
    padding: 0 16px;
  }
`;

const TagWrap = styled.div`
  padding-top: 24px;

  @media (max-width: 1080px) {
    padding-top: 16px;
  }
`;

const Tag = styled.span`
  display: inline-block;
  padding: 7px 16px;
  background-color: #eef1f7;
  border-radius: 300px;
  line-height: 22px;
  font-size: 14px;
  font-weight: 500;
`;

const Title = styled.h2`
  padding-top: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    padding-top: 8px;
  }
`;

const Content = styled.div`
  padding-top: 4px;
  max-height: 54px;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
`;

const ContentInfoWrap = styled.div`
  display: flex;
  align-items: center;

  padding: 12px 0 24px;
  height: 48px;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.5px;
  border-bottom: 1px solid #e4e4e4;

  @media (max-width: 1080px) {
    padding: 12px 0 16px;
  }
`;

const ID = styled.span`
  color: #444;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

const CreatedDate = styled.span`
  margin-left: 17px;
  color: #999;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.5px;
`;
