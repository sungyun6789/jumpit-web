# 점핏 사전 조사

작성일: 23.08.11

개발 시작하기 전에 간략하게 조사한 내용으로 **실제 개발 내용과는 다를 수 있습니다.**

## 반응형 스타일

단위 px

| 데스크탑 | 태블릿     | 모바일 |
| -------- | ---------- | ------ |
| 1081~    | 601 ~ 1080 | ~ 600  |

## 페이지

### 메인 페이지

- 초기 페이지 진입 시 나오는 이벤트 모달의 유효성은 쿠키로 관리
- 최상단 슬라이드 2개 3초 간격으로 자동 변환
- 데스크탑 상단 오른쪽에 있는 작은 슬라이드가 태블릿 및 모바일에서는 하단에 노출
- 각 섹셜별 너비 1060 or 1080 사용
- 이번주 인기 포지션은 직무 탐색에서 선택한 포지션이 존재할 경우 해당 포지션으로 노출되고 값이 없는 경우 서버 응답에 따라 노출

### 직무 탐색 페이지

- 직무는 로컬스토리지로 관리해서 로그인을 하지 않아도 이전에 선택했던 직무가 선택되어 있음
- 선택된 직무는 "프론트엔드 개발자" 이런 식으로 관리되지 않고 숫자로 저장됨
- 기술 스택은 로컬스토리지로 관리하지 않고 쿼리로만 관리 (페이지 이탈 시 정보 날아감)
- 기술 스택 or 경력 or 지역 select로 관리되는 값 선택 시 스크롤 위치 변경
- 16개씩 무한스크롤
- 선택한 직무에 맞는 기술 스택 목록이 노출됨

### 더. 루키 페이지

- 태그 랜덤 선택
- 태그 선택 저장 안 함
- 하단에 "미리미리 준비해둬요" 섹션에 이력서만 새 창으로 열리고 나머지는 페이지 이동

### 더. 루키 페이지 > 절찬 채용중 페이지

- 선택한 태그를 쿼리로 관리
- 16개씩 무한스크롤

### 더. 루키 페이지 > 취업꿀팁 대방출

- 선택한 태그를 쿼리로 관리
- 12개씩 무한스크롤
- #Only 점핏 태그 선택 시 6개까지 노출하고 그 외에는 로그인해야 볼 수 있음

### 이력서 페이지

- 만약 로그인이 되어있지 않은 경우 메인 페이지로 이동하고, 로그인 모달 노출

### 개발자 인터뷰 페이지

- 15개씩 무한스크롤

### 취업 Q&A 페이지

- 50개씩 무한스크롤

## 로그인

- 소셜 로그인을 파이어베이스로 구현
- 기업 회원의 경우 로그인 페이지가 따로 있고, 일반 유저의 경우 로그인 페이지가 따로 존재하지 않고 모달로 처리 (회원가입도 마찬가지)
- 로그인 모달 최소 크기와 최대 크기가 있어서 pc에서는 중앙에 존재하지만 모바일에서는 다른 화면인 것처럼 꽉 차게 노출

## 그 외

- 모달이 root밖에 생성된 걸로 봐서 portal 사용해서 구현된 것으로 보임
- 최근 검색어는 로컬스토리지로 관리 (직무 탐색 페이지 1번과 동일한 구현)
- 페이지별 타이틀은 변하지 않음
- 전체적인 모바일 스타일은 ~600px로 잡혀있는데 앱 전환 안내 메시지는 ~829px인 경우 노출
- 유효하지 않은 경로 접근 시 메인 페이지 리다이렉트
