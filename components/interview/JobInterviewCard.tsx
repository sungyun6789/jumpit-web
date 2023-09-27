import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import type { InterviewContent } from '~/pages/api/content/interviews';

interface Props {
  content: InterviewContent;
}

const JobInterviewCard = ({ content }: Props) => {
  return (
    <Block href={`/job-interview/${content.id}`}>
      <Banner src={content.imagePath} width={340} height={226} alt="interview banner" />

      <Title>{content.title}</Title>

      <FlexBox>
        <Info>{content.companyName}</Info>
        <IconInfo iconPath="https://www.jumpit.co.kr/App/build/static/media/ico-content-viewcount.ce7147a1.svg">
          {content.viewCnt}
        </IconInfo>
        <IconInfo iconPath="https://www.jumpit.co.kr/App/build/static/media/ico-content-readingtime.1374f689.svg">
          {content.readingTime}분
        </IconInfo>
      </FlexBox>

      <CategoryBox>
        {content.jobCategories.map((category) => (
          <Category key={category.id}>{category.name}</Category>
        ))}
      </CategoryBox>
    </Block>
  );
};

export default JobInterviewCard;

const Block = styled(Link)`
  width: 340px;
  margin: 10px 10px 46px;

  :hover {
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

const Banner = styled(Image)`
  display: block;
  width: 100%;
  height: 226px;
  border-radius: 4px;
  object-fit: cover;
`;

const Title = styled.h2`
  margin-top: 16px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const FlexBox = styled.div`
  display: flex;
`;

const Info = styled.span`
  display: -webkit-box;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  color: #444444;
  line-height: 20px;
  letter-spacing: -0.5px;
  margin: 8px 0 0;
  padding-right: 10px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  :not(:first-of-type) {
    padding-left: 10px;
  }

  :not(:last-of-type) {
    ::after {
      content: '';
      height: 12px;
      width: 1px;
      background-color: #e4e4e4;
      position: absolute;
      right: 0;
      top: 4px;
    }
  }
`;

const IconInfo = styled(Info)<{ iconPath: string }>`
  padding-left: 30px !important;

  ::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 2px;
    background: url(${(props) => props.iconPath});
    width: 16px;
    height: 16px;
  }
`;

const CategoryBox = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  max-height: 60px;
  overflow-y: hidden;
  list-style: none;
`;

const Category = styled.li`
  margin: 0 6px 6px 0;
  color: #666666;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.5px;
  padding: 3px 8px;
  background-color: #f5f5f8;
  border-radius: 4px;

  :hover {
    background-color: #e9e9e9;
  }
`;
