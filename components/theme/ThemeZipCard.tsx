import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import type { ThemeZipMock } from '~/mock/themeZip';

interface Props {
  data: ThemeZipMock;
}

const ThemeZipCard = ({ data }: Props) => {
  return (
    <Block href={'/'}>
      <BannerWrap>
        <Banner src={data.image} width={340} height={226} alt="피드 배너 이미지" objectFit="cover" />
      </BannerWrap>
      <Title>{data.title}</Title>
      <SubTitleWrap>
        <SubTitle>{data.subTitle}</SubTitle>
      </SubTitleWrap>
    </Block>
  );
};

export default ThemeZipCard;

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
`;

const Title = styled.h2`
  margin-top: 16px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const SubTitleWrap = styled.div`
  max-height: 30px;
  margin-bottom: 12px; // 실서비스에서는 다른 컴포넌트 재사용하느라고 불필요한 스타일이 추가됐는데 그거 대응하기 위해서 추가된 간격
`;

const SubTitle = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  padding: 0;
  color: #444;
`;
