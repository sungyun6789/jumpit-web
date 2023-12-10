import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const ResumesPage = () => {
  const router = useRouter();
  const { data } = useSession();

  useEffect(() => {
    if (!data?.user) {
      router.replace('/login');
    }
  }, [data]);

  return <div>이력서 페이지</div>;
};

export default ResumesPage;
