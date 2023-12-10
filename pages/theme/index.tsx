import ScrollTopButton from '~/components/common/ScrollTopButton';
import ThemeZipCardList from '~/components/theme/ThemeZipCardList';
import ThemeZipTag from '~/components/theme/ThemeZipTag';
import ThemeZipTitle from '~/components/theme/ThemeZipTitle';

const ThemePage = () => {
  return (
    <>
      <ThemeZipTitle />
      <ThemeZipCardList />
      <ThemeZipTag />
      <ScrollTopButton right={-80} />
    </>
  );
};

export default ThemePage;
