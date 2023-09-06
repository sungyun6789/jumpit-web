import type { ParsedUrlQuery } from 'querystring';

/**
 * 중복된 쿼리 키를 사용하기 위해 배열로 된 쿼리를 문자열로 변환하는 함수
 */
const generateDuplicateQueryKeys = (query: ParsedUrlQuery, key: string, isArray = false) => {
  /**
   * 1. 쿼리 키가 존재하는지 확인하고 아니면 빈 배열을 반환
   * 2. 키가 존재한다면 타입을 검사해서 단일 값인지 확인하고 단일 값인 경우 배열로 만듦
   */
  const q = query?.[key] ? ((typeof query[key] === 'string' ? [query[key]] : query[key]) as string[]) : [];

  if (isArray) {
    return q;
  }

  /**
   * 3. 배열을 쿼리로 사용할 수 있게 특정 문자열 형태로 변환
   * 4. 배열을 합쳐서 사용 가능한 쿼리 문자를 반환
   */
  return q.map((value) => `&${key}=${value}`).join('');
};

export default generateDuplicateQueryKeys;
