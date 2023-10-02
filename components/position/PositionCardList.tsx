import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { mont } from '~/pages/_app';

import type { Position } from '~/pages/api/home';

interface Props {
  data: Position[] | undefined;
}

const PositionCardList = ({ data }: Props) => {
  return (
    <Block>
      {data?.map((value, index) => (
        <Item key={index} className="item" href={'/position/' + value.id}>
          <BannerBox>
            <div className="banner-overlay" />
            <Image src={value.imagePath} width={250} height={166} alt="banner" className="banner" />

            <HoverView className="counts">
              <CountBox>
                <Image src="/viewIcon.svg" width={16} height={16} alt="view count" />
                <Count>{value.viewCount}</Count>
              </CountBox>

              <Image
                src="https://www.jumpit.co.kr/App/build/static/media/ico_position_bookmark.b54fcd24.svg"
                width={16}
                height={16}
                alt="bookmark"
              />
            </HoverView>

            <BookmarkButton />
          </BannerBox>
          <DescriptionBox>
            <CompanyName>{value.companyName}</CompanyName>
            <PositionTitle>{value.title}</PositionTitle>
            <TechStackBox className={mont.className}>
              {value.techStacks.map((stack, index) => (
                <Description key={stack}>{(index === 0 ? '' : '· ') + stack}</Description>
              ))}
            </TechStackBox>
            <LocationCareerBox>
              {value.locations.map((location) => (
                <Description key={location}>{location}</Description>
              ))}
              <CareerDescription>
                {value.minCareer === 0 ? '신입' : '경력 ' + value.minCareer}
                {value.maxCareer !== 1 && `~${value.maxCareer}년`}
              </CareerDescription>
            </LocationCareerBox>
          </DescriptionBox>
        </Item>
      ))}
    </Block>
  );
};

export default PositionCardList;

const Block = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  margin: auto;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 8px;
  }

  @media (max-width: 600px) {
    padding: 0 6px;
  }
`;

const Item = styled(Link)`
  width: calc(25% -20px);
  flex: 1 1 22%;
  max-width: 270px;
  padding: 10px;
  cursor: pointer;

  .counts {
    display: none;
  }

  .banner {
    transition: all 0.3s ease 0s;
    object-fit: cover;
  }

  :hover {
    .counts {
      display: flex;
      z-index: 2;
    }

    .banner {
      transform: scale(1.2);
    }

    .banner-overlay {
      background: #000;
      opacity: 0.3;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 166px;
    }

    h2 {
      text-decoration: underline;
    }
  }

  @media (max-width: 1080px) {
    max-width: 50%;
    flex: 1 1 40%;
    padding: 8px;
  }

  @media (max-width: 600px) {
    padding: 0 6px;
  }
`;

const BannerBox = styled.div`
  position: relative;
  box-sizing: content-box;
  width: 250px;
  height: 166px;
  border: 1px solid #0000001a;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 1080px) {
    width: 100%;
    height: calc((((50vw - 16px) - 8px) / 3) * 2);

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const HoverView = styled.div`
  gap: 10px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const CountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Count = styled.span`
  color: #fff;
  font-size: 13px;
`;

const BookmarkButton = styled.button`
  @media (max-width: 1080px) {
    position: absolute;
    top: 16px;
    right: 16px;
    min-width: 28px;
    height: 28px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 3px;
    border: none;

    ::before {
      color: #fff;
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url('https://www.jumpit.co.kr/App/build/static/media/ico_position_bookmark.b54fcd24.svg') center
        center no-repeat;
    }
  }
`;

const DescriptionBox = styled.div`
  padding: 12px 0px 36px;
  width: calc(100% - 7px);
`;

const CompanyName = styled.p`
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #444444;
`;

const PositionTitle = styled.h2`
  margin-top: 6px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.4em;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Description = styled.span`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #999999;
`;

const TechStackBox = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  overflow: hidden;
  height: 18px;
  margin-top: 8px;
`;

const LocationCareerBox = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 4px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const CareerDescription = styled(Description)`
  ::before {
    content: '· ';
  }
`;
