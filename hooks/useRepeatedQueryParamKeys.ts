import { useRouter } from 'next/router';

const createQueryParams = (key: 'jobCategory' | 'tag' | 'sort', values: unknown[]) => {
  return values.map((value) => `&${key}=${value}`).join('');
};

/**
 * 중복되는 쿼리 키를 사용하기 위한 커스텀 훅
 * 일반적인 방식으로 쿼리를 추가할 경우 중복 키를 덮어쓰기 때문에 문자열로 가공해서 라우팅할 수 있도록 구현
 */
const useRepeatedQueryParamKeys = () => {
  const { pathname, query: q, push: p } = useRouter();

  /*
   * 새로운 쿼리를 붙이기 전에 기존 쿼리를 계산하기 위한 변수
   * 1. 쿼리값이 존재하는지 확인
   * 2. 쿼리값이 배열인지 확인, 배열이 아닌 경우는 값이 하나라서 문자열로 들어온 경우
   * 3. 모든 경우에 대해서 배열로 반환
   */
  const queryJobCategory = q.jobCategory ? (Array.isArray(q.jobCategory) ? q.jobCategory : [q.jobCategory]) : [];
  const queryTag = q.tag ? (Array.isArray(q.tag) ? q.tag : [q.tag]) : [];
  const querySort = q.sort ? [q.sort] : [];

  /*
   * 쿼리 초기값 (이미 설정된 값으로 새로 입력받은 쿼리와 그 외에 쿼리를 합치기 위해 사용)
   * ex) &jobCategory=1&jobCategory=2
   * ex) &tag=FLEXIBLE_WORK
   */
  let jobCategories = createQueryParams('jobCategory', queryJobCategory);
  let tags = createQueryParams('tag', queryTag);
  let sort = createQueryParams('sort', querySort);

  /**
   * @param key 변경할 쿼리 키
   * @param arr 중복된 키에 할당할 값 목록
   */
  const push = (key: 'jobCategory' | 'tag' | 'sort', arr: unknown[]) => {
    if (key === 'jobCategory') {
      jobCategories = createQueryParams('jobCategory', arr);
    } else if (key === 'tag') {
      tags = createQueryParams('tag', arr);
    } else if (key === 'sort') {
      sort = createQueryParams('sort', arr);
    }

    const queries = (jobCategories + tags + sort).replace(/^./, '?');

    p(pathname + queries);
  };

  return { push };
};

export default useRepeatedQueryParamKeys;
