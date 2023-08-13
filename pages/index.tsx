import MainTopContent from '~/components/home/MainTopContent';
import PositionRecommendation from '~/components/home/PositionRecommend';
import ThemeZip from '~/components/home/ThemeZip';

export default function Home() {
  return (
    <>
      <MainTopContent />
      <ThemeZip />
      <PositionRecommendation />
    </>
  );
}
