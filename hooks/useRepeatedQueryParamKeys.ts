import { useRouter } from 'next/router';

/**
 * 중복되는 쿼리 키를 사용하기 위한 커스텀 훅
 * 일반적인 방식으로 쿼리를 추가할 경우 중복 키를 덮어쓰기 때문에 문자열로 가공해서 라우팅할 수 있도록 구현
 */
const useRepeatedQueryParamKeys = () => {
  const { pathname, push: p } = useRouter();

  const push = (key: string, arr: unknown[]) => {
    const query = arr.map((value, index) => (index === 0 ? '?' : '&') + `${key}=${value}`).join('');
    p(pathname + query);
  };

  return { push };
};

export default useRepeatedQueryParamKeys;
