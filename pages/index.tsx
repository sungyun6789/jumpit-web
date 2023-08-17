import dynamic from 'next/dynamic';
import MiniBanner from '~/components/home/MiniBanner';

// import EmploymentEventBanner from '~/components/home/EmploymentEventBanner';
// import MainTopContent from '~/components/home/MainTopContent';
// import PositionRecommendation from '~/components/home/PositionRecommend';
// import ThemeZip from '~/components/home/ThemeZip';
// import WeeklyPickPosition from '~/components/home/WeeklyPickPosition';

const EmploymentEventBanner = dynamic(() => import('~/components/home/EmploymentEventBanner'), { ssr: false });
const MainTopContent = dynamic(() => import('~/components/home/MainTopContent'), { ssr: false });
const PositionRecommendation = dynamic(() => import('~/components/home/PositionRecommend'), { ssr: false });
const ThemeZip = dynamic(() => import('~/components/home/ThemeZip'), { ssr: false });
const WeeklyPickPosition = dynamic(() => import('~/components/home/WeeklyPickPosition'), { ssr: false });

export default function Home() {
  return (
    <>
      <MainTopContent />
      <ThemeZip />
      <PositionRecommendation />
      <WeeklyPickPosition />
      <EmploymentEventBanner />
      <MiniBanner />
    </>
  );
}
