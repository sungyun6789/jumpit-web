import { useRouter } from 'next/router';

const QUERY_KEYS = ['jobCategory', 'techStack', 'tag', 'sort'] as const;

/**
 * 쿼리 입력 순서와 상관없이 동일한 쿼리 키 순서를 유지하기 위한 커스텀 훅
 */
const usePositionQueryPush = () => {
  const { pathname, isReady, query: q, push: p } = useRouter();

  const push = (key: 'jobCategory' | 'techStack' | 'tag' | 'sort', values: unknown[]) => {
    // 쿼리가 준비되지 않고 실행해서 "쿼리에 값이 존재하지 않는 경우"로 빠지는 것을 방지
    if (isReady) {
      const query = Object.fromEntries(
        QUERY_KEYS.map((queryKey) => {
          // 내가 설정하고 싶은 쿼리 키는 전달받은 값을 사용해서 새로운 값을 반환
          if (queryKey === key) {
            return [queryKey, values];
          }

          // 내가 설정하려고 한 값이 아니지만 쿼리에 값이 존재하는 경우 그대로 사용
          if (q[queryKey]) {
            return [queryKey, q[queryKey]];
          }

          // 쿼리에 값이 존재하지 않는 경우
          return [queryKey, []];
        })
      );

      p({ pathname, query });
    }
  };

  return { push };
};

export default usePositionQueryPush;
