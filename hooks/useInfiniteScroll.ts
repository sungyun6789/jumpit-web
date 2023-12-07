import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [ref, inView] = useInView();

  const enableNextPage = () => setHasNextPage(true);
  const disableNextPage = () => setHasNextPage(false);

  const changePage = (value: number) => setPage(value);

  const reset = () => {
    setPage(1);
    setHasNextPage(true);
  };

  return { page, hasNextPage, ref, inView, reset, enableNextPage, disableNextPage, changePage };
};

export default useInfiniteScroll;
