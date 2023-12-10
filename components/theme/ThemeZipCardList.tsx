import styled from '@emotion/styled';
import { THEME_ZIP_MOCK } from '~/mock/themeZip';

import ThemeZipCard from './ThemeZipCard';

const ThemeZipCardList = () => {
  return (
    <Block>
      {THEME_ZIP_MOCK.map((value, index) => (
        <ThemeZipCard key={index} data={value} />
      ))}
    </Block>
  );
};

export default ThemeZipCardList;

const Block = styled.section`
  box-sizing: content-box;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px 34px;

  @media (max-width: 600px) {
    padding: 0 0 64px;
  }
`;
