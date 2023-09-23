import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import EmploymentEventBanner from '~/components/home/EmploymentEventBanner';
import MainTopContent from '~/components/home/MainTopContent';
import MiniBanner from '~/components/home/MiniBanner';
import Notice from '~/components/home/Notice';
import PositionRecommendation from '~/components/home/PositionRecommend';
import ThemeZip from '~/components/home/ThemeZip';
import WeeklyPickPosition from '~/components/home/WeeklyPickPosition';
import HomeDataProvier from '~/context/HomeDataProvier';
import ThemeBannerProvider from '~/context/ThemeBannerProvider';
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
        <ThemeBannerProvider>
          <MainTopContent />
          <ThemeZip />
          <PositionRecommendation />
          <WeeklyPickPosition />
          <TabletView>
            <Notice />
          </TabletView>
        </ThemeBannerProvider>
      </HomeDataProvier>

      <EmploymentEventBanner />
      <MiniBanner />
      {isOpen && <EventModal close={close} />}
    </>
  );
}
