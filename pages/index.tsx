import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import EmploymentEventBanner from '~/components/home/EmploymentEventBanner';
import HomeThemeZip from '~/components/home/HomeThemeZip';
import MainTopContent from '~/components/home/MainTopContent';
import MiniBanner from '~/components/home/MiniBanner';
import Notice from '~/components/home/Notice';
import PositionRecommendation from '~/components/home/PositionRecommend';
import WeeklyPickPosition from '~/components/home/WeeklyPickPosition';
import HomeDataProvier from '~/context/HomeDataProvier';
import { TabletView } from '~/styles/breakpoint';
import { getCookie } from '~/utils/cookie';

const EventModal = dynamic(() => import('~/components/modal/EventModal'), { ssr: false });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (getCookie('hide_event_fit_apply') !== 'true') {
      setIsOpen(true);
    }
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      <HomeDataProvier>
        <MainTopContent />
        <HomeThemeZip />
        <PositionRecommendation />
        <WeeklyPickPosition />
        <TabletView>
          <Notice />
        </TabletView>
      </HomeDataProvier>

      <EmploymentEventBanner />
      <MiniBanner />
      {isOpen && <EventModal close={close} />}
    </>
  );
}
