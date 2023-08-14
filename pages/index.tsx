import EmploymentEventBanner from '~/components/home/EmploymentEventBanner';
import MainTopContent from '~/components/home/MainTopContent';
import PositionRecommendation from '~/components/home/PositionRecommend';
import ThemeZip from '~/components/home/ThemeZip';
import WeeklyPickPosition from '~/components/home/WeeklyPickPosition';

export default function Home() {
  return (
    <>
      <MainTopContent />
      <ThemeZip />
      <PositionRecommendation />
      <WeeklyPickPosition />
      <EmploymentEventBanner />
    </>
  );
}
