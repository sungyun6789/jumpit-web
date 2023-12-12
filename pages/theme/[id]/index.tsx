import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { THEME_ZIP_MOCK } from '~/mock/themeZip';

import type { ThemeZipMock } from '~/mock/themeZip';

const WHITE_TITLE = ['/theme/rookie', '/theme/wework', '/theme/wecode', '/theme/msaischool'];

const ThemeDetailPage = () => {
  const router = useRouter();

  const data = THEME_ZIP_MOCK.find((value) => value.link === router.asPath);

  if (!data) return null;

  return (
    <>
      <Head>
        <title>점핏 | {data.detail.headTitle}</title>
      </Head>
      <Block detail={data.detail} bgColor={data.detail.bgColor}>
        <TitleWrap>
          <Title isWhite={WHITE_TITLE.includes(router.asPath)}>{data.title}</Title>
        </TitleWrap>
      </Block>
    </>
  );
};

export default ThemeDetailPage;

const Block = styled.section<{ detail: ThemeZipMock['detail']; bgColor: string }>`
  position: relative;
  width: 100%;
  height: 300px;
  background: url(${(props) => props.detail.pcImageUrl}) center center / auto 300px no-repeat;
  background-color: ${(props) => props.bgColor};

  @media (max-width: 1080px) {
    height: 260px;
    background: url(${(props) => props.detail.tabletImageUrl}) center center / auto 260px no-repeat;
    background-color: ${(props) => props.bgColor};
  }

  @media (max-width: 600px) {
    background: url(${(props) => props.detail.mobileImageUrl}) center center / auto 260px no-repeat;
    background-color: ${(props) => props.bgColor};
  }
`;

const TitleWrap = styled.div`
  max-width: 1060px;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1080px) {
    align-items: unset;
    height: unset;
    padding: 56px 0 0 20px;
  }

  @media (max-width: 600px) {
    padding: 30px 0 0 24px;
  }
`;

const Title = styled.h1<{ isWhite: boolean }>`
  max-width: 540px;
  font-weight: 700;
  font-size: 50px;
  line-height: 72px;
  word-break: keep-all;
  color: ${(props) => (props.isWhite ? '#fff' : '#000')};
  white-space: pre-wrap;

  @media (max-width: 1080px) {
    max-width: 430px;
    font-size: 40px;
    line-height: 58px;
  }

  @media (max-width: 600px) {
    max-width: 316px;
    font-size: 30px;
    line-height: 43px;
  }
`;
