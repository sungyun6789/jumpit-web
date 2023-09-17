import { useRouter } from 'next/router';
import { useEffect } from 'react';
import RookiePositionTag from '~/components/rookie/RookiePositionTag';

const RookiePositionPage = () => {
  const { pathname, push } = useRouter();

  useEffect(() => {
    push({
      pathname,
      query: {
        curation: undefined,
      },
    });
  }, []);

  return (
    <>
      <RookiePositionTag />
    </>
  );
};

export default RookiePositionPage;
