import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { JobDescriptionContext } from '~/context/JobDescriptionProvider';

const JobDescriptionCompanyStory = () => {
  const data = useContext(JobDescriptionContext);

  if (!data || data.itCompanyStory.length === 0) return null;

  return (
    <Block>
      <Title>it ;한 기업이야기</Title>
      {data.itCompanyStory.map((story, index) => (
        <StoryWrap key={index}>
          <Link href={story.link} target="_blank">
            <StyledImage src={story.imagePath} width={197} height={200} alt="기업 관련 링크" />
            <Description>{story.title}</Description>
          </Link>
        </StoryWrap>
      ))}
    </Block>
  );
};

export default JobDescriptionCompanyStory;

const Block = styled.section`
  position: relative;
  margin-top: 80px;
  margin-bottom: 56px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.5px;
`;

const StoryWrap = styled.div`
  position: relative;
  margin: 0px 20px 0px 0px;
  width: 197px;
  height: 200px;
`;

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  border-radius: 4px;
`;

const Description = styled.strong`
  position: absolute;
  top: 24px;
  left: 24px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  width: calc(100% - 48px);
  word-break: break-all;
`;
