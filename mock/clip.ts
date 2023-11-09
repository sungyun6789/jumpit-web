/**
 * @description
 * API가 존재하지 않아서 데이터를 클라이언트에서 관리하는데, 양이 너무 많아서 가독성을 해치는 부분을 분리
 */

import { CDN_PATH } from '~/constants/path';

export const _2023_CLIP = [
  {
    image: CDN_PATH + '/jumpit/event/developer_concert/img_replay_01.webp',
    link: 'https://www.youtube.com/watch?v=pN0O1AqZYYA',
    title: 'JUMPIT TO FRONT-END',
    session: [
      {
        mainTitle: '센스있게 일하는 FE 개발자 되기',
        content: [
          { middleTitle: '• ‘FE개발의 소프트 스킬과 하드스킬’ 강연자 김태곤' },
          {
            middleTitle: '• ‘협업?! 이렇게 한번 해봐’ 강연자 유동균',
            subTitle: '- FE개발자가 타 직군과 대화를 잘해야하는 이유',
          },
        ],
      },
      {
        mainTitle: 'FIT한 정보로 성장 부스트업',
        content: [
          {
            middleTitle: '• ‘FE개발 트렌드’ 강연자 이인제[소플]',
            subTitle: '- 리액트 개발 생태계와 Next.js까지',
          },
          { middleTitle: '• ‘타입스크립트로 FE개발 레벨업’ 강연자 장기효[캡틴판교]' },
        ],
      },
    ],
  },
  {
    image: CDN_PATH + '/jumpit/event/developer_concert/img_replay_be.webp',
    link: 'https://www.youtube.com/watch?v=qI4zF0GfEW0',
    title: 'JUMPIT TO BACK-END',
    session: [
      {
        mainTitle: '센스있게 일하는 BE 개발자 되기',
        content: [
          { middleTitle: '• ‘중요한 건 인터페이스야’ 강연자 손진규' },
          { middleTitle: '• ‘토스뱅크 기업문화와 성장하는 주니어 BE특징’ 강연자 박준하' },
        ],
      },
      {
        mainTitle: 'FIT한 정보로 성장 부스트업',
        content: [
          { middleTitle: '• ‘알아두면 쓸 데 있는 코틀린’ 강연자 박용권' },
          { middleTitle: '• ‘컨테이너 인프라의 필요 배경, 왜 지금 배워야 하는가?’ 강연자 심근우' },
        ],
      },
    ],
  },
];

export const _2022_CLIP = [
  {
    image: CDN_PATH + '/jumpit/event/book_concert/img_replay_01.png',
    link: 'https://www.youtube.com/watch?v=9M8ScqQvEzo',
    title: '신입 개발자로 살아남는 방책',
    session: [
      {
        mainTitle: '개발자 취업을 위한 단계별 준비 방법과 현업에서 생각하는 신입 개발자 선발 포인트',
        content: [
          { middleTitle: '- ‘누가 IT 시장 취업에 성공하는가’ 저자 이상민' },
          { middleTitle: '- ‘사람인HR IT 연구소’ 소장 남광현' },
        ],
      },
    ],
  },
  {
    image: CDN_PATH + '/jumpit/event/book_concert/img_replay_02.png',
    link: 'https://www.youtube.com/watch?v=BsgyzcfrUwQ',
    title: '신입 개발자의 커리어 방향성',
    session: [
      {
        mainTitle: '개발자로서 슬럼프에 빠져, 가야 할 길을 잃고 어떻게 성장 맵을 그려나가야 할지 막막하다면?',
        content: [{ middleTitle: '- ‘개발자 오디세이’ 저자 이경종' }],
      },
    ],
  },
  {
    image: CDN_PATH + '/jumpit/event/book_concert/img_replay_03.png',
    link: 'https://www.youtube.com/watch?v=0NWVDO1Lmx4',
    title: '전공자, 개발자 취업 A to Z',
    session: [
      {
        mainTitle:
          '전공자의 강점을 더 강화해 개발자로 취업하는 방법 밸런스 게임으로 알아보는 신입 개발자 채용의 모든 것',
        content: [
          { middleTitle: '- ‘클린코드, 이제는 파이썬이다’ 역자 박재호' },
          { middleTitle: '- 기업과 함께하는 소통 시간 : 팀오투, 클로봇, 아드리엘' },
        ],
      },
    ],
  },
  {
    image: CDN_PATH + '/jumpit/event/book_concert/img_replay_04.png',
    link: 'https://www.youtube.com/watch?v=PIVuvB-xoPc&feature=youtu.be',
    title: '비전공자, 개발자 취업 A to Z',
    session: [
      {
        mainTitle: '비전공자가 가지는 개발자 취업의 장점 비전공 신입 개발자가 취업 시 고려해야 할 중요 포인트',
        content: [{ middleTitle: '- ‘Node.JS 교과서’ ‘Let’s Get IT 자바스크립트 프로그래밍’ 저자 조현영' }],
      },
    ],
  },
  {
    image: CDN_PATH + '/jumpit/event/book_concert/img_replay_05.png',
    link: 'https://www.youtube.com/watch?v=EDWMLCNU78w&feature=youtu.bes',
    title: '취준생을 위한 개발 분야 총 정리',
    session: [
      {
        mainTitle:
          'IT분야 1위 유튜버 [조코딩]이 설명하는! 광범위한 개발 취업분야를 한 번에 이해하고 싶은 개발 취준생이 꼭 들어야 할 모든 것',
        content: [{ middleTitle: '- ‘Do it! 조코딩의 프로그래밍 입문’ 저자 조코딩(조동근)' }],
      },
    ],
  },
];
