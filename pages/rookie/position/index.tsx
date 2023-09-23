import { useRouter } from 'next/router';
import { useEffect } from 'react';
import RookiePositionTag from '~/components/rookie/RookiePositionTag';
import RookieSearchTypeSelector from '~/components/rookie/RookieSearchCategorySelect';
import RookieSearchPositionList from '~/components/rookie/RookieSearchPositionList';
import RookieCodeInitializeProvider from '~/context/RookieCodeInitializeProvider';

const RookiePositionPage = () => {
  const { isReady, pathname, query, push } = useRouter();

  useEffect(() => {
    if (isReady && !query.curation) {
      push({
        pathname,
        query: {
          ...query,
          curation: undefined,
        },
      });
    }
  }, [isReady]);

  return (
    <RookieCodeInitializeProvider>
      <RookiePositionTag />
      <RookieSearchTypeSelector />
      <RookieSearchPositionList />
    </RookieCodeInitializeProvider>
  );
};

export default RookiePositionPage;
