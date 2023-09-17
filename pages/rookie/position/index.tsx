import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

  return <div>RookiePositionPage</div>;
};

export default RookiePositionPage;
