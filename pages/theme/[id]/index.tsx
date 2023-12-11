import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { THEME_ZIP_MOCK } from '~/mock/themeZip';

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
      <Block url={data.detail.image}>
        <TitleWrap>
          <Title isWhite={WHITE_TITLE.includes(router.asPath)}>{data.title}</Title>
        </TitleWrap>
      </Block>
    </>
  );
};

export default ThemeDetailPage;

const Block = styled.section<{ url: string }>`
  position: relative;
  width: 100%;
  height: 300px;
  background: url(${(props) => props.url}) center center / auto 300px no-repeat;
`;

const TitleWrap = styled.div`
  max-width: 1060px;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;

const Title = styled.h1<{ isWhite: boolean }>`
  max-width: 540px;
  font-weight: 700;
  font-size: 50px;
  line-height: 72px;
  word-break: keep-all;
  color: ${(props) => (props.isWhite ? '#fff' : '#000')};
  white-space: pre-wrap;
`;
