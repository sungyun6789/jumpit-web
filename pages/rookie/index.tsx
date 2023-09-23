import RookieBanner from '~/components/rookie/RookieBanner';
import RookieCurationList from '~/components/rookie/RookieCurationList';
import RookieFirstJob from '~/components/rookie/RookieFirstJob';
import RookieTip from '~/components/rookie/RookieTip';
import RookieHomeResultProvider from '~/context/RookieHomeResultProvider';

const RookiePage = () => {
  return (
    <RookieHomeResultProvider>
      <RookieBanner />
      <RookieCurationList />
      <RookieFirstJob />
      <RookieTip />
    </RookieHomeResultProvider>
  );
};

export default RookiePage;
