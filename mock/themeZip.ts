import { CDN_PATH } from '~/constants/path';

export interface ThemeZipMock {
  image: string;
  title: string;
  subTitle: string;
  link: string;
  detail: {
    headTitle: string; // page head title
    bgColor: string; // 이미지 배경색
    pcImageUrl: string;
    tabletImageUrl: string;
    mobileImageUrl: string;
  };
}

// 이미지 주소가 tab.webp로 설정된 경로, 반대의 경우는 ta.webp로 설정된 경우가 있음
const TABS = ['/kv_speed100_', '/kv_showmethemoney_', '/kv_hitmi_', '/kv_wecode_'];

// 이미지 형식이 gif인 경로
const GIFS = ['/kv_speed100_'];

const createImageURL = (url: string) => {
  const prefix = CDN_PATH + '/jumpit/position/themes' + url;

  return {
    pcImageUrl: prefix + 'pc' + (GIFS.includes(url) ? '.gif' : '.webp'),
    tabletImageUrl: prefix + (TABS.includes(url) ? 'tab' : 'ta' + '.webp'),
    mobileImageUrl: prefix + 'mw.webp',
  };
};

/**
 * 일부 데이터는 /api/themes/banners/home 를 통해서 사용할 수 있지만
 * 대부분의 데이터는 다시 생성해야 사용할 수 있어서 굳이 재사용하지 않음
 */
export const THEME_ZIP_MOCK: ThemeZipMock[] = [
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_unicorns.webp',
    title: `K-유니콘으로 
무럭무럭 크는 중`,
    subTitle: '중소벤처기업부에서 선정한 미래의 유니콘🦄이 되어 국내를 넘어 세계로~!',
    link: '/theme/unicorns',
    detail: {
      headTitle: '유니콘 꿈나무',
      bgColor: '#ffe89f',
      ...createImageURL('/unicorns/kv_unicorns_'),
    },
  },
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_speed100.webp',
    title: `채용담당자가 
읽씹 안하는 기업`,
    subTitle: '최근 3개월 동안 7일 내에 100% 피드백 주는 기업들만 모아봤어요🚀',
    link: '/theme/speed100',
    detail: {
      headTitle: '피드백 100%',
      bgColor: '#bdf0eb',
      ...createImageURL('/kv_speed100_'),
    },
  },
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_showmethemoney.webp',
    title: `내 연봉 앞자리가 
바뀌는 포지션`,
    subTitle: '야 너두 갈 수 있어, 연봉 앞자리가 바뀌는 포지션을 모아봤어요💸',
    link: '/theme/showmethemoney',
    detail: {
      headTitle: '연봉이 아쉬울 때',
      bgColor: '#dcf0ff',
      ...createImageURL('/kv_showmethemoney_'),
    },
  },
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_hitmi.webp',
    title: '요즘 폼 미친 기업s',
    subTitle: '대규모 채용을 하고 있는 잘나가는 요즘 기업모음. zip📂',
    link: '/theme/hitmi',
    detail: {
      headTitle: '대규모 채용 기업',
      bgColor: '#caf6bc',
      ...createImageURL('/kv_hitmi_'),
    },
  },
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_forthefuture.webp',
    title: `이제는 필환경 시대! 
지구를 지키는 착한 기업`,
    subTitle: '친환경 힙한 기업🌳 깨끗한 미래를 위해 지구지키기🌍에 동참해보시는 것은 어때요?',
    link: '/theme/forthefuture',
    detail: {
      headTitle: '지구지킴이',
      bgColor: '#c7f8da',
      ...createImageURL('/forthefuture/kv_forthefuture_'),
    },
  },
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_rookie.webp',
    title: `신입 개발자를 위한 
더.루키 포지션`,
    subTitle: '경력은 어디서 쌓아..? 바로 여기!!  신입개발자를 위한 루키 포지션👼',
    link: '/theme/rookie',
    detail: {
      headTitle: '신인개발자 모여라',
      bgColor: '#0e0e0e',
      ...createImageURL('/rookie/kv_rookie_'),
    },
  },
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_iamt.webp',
    title: `나는 T다. 
로봇 개발자가 되어볼까?`,
    subTitle: '미래의 친구, 로봇을 만들어 줄 개발자를 뽑고 있어요~!',
    link: '/theme/iamt',
    detail: {
      headTitle: '로봇 개발자.zip',
      bgColor: '#e7e3fe',
      ...createImageURL('/kv_iamt_'),
    },
  },

  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_msaischool.webp',
    title: `마이크로소프트 
AI School 채용관`,
    subTitle: '실무 역량 완비 MS AI School 수료생들에게 딱!',
    link: '/theme/msaischool',
    detail: {
      headTitle: '점핏 x 마이크로소프트',
      bgColor: '#23bbfd',
      ...createImageURL('/msaischool/kv_msaischool_'),
    },
  },
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_wecode.webp',
    title: `오프라인 NO.1 부트캠프 
위코드 전용 채용관`,
    subTitle: '위코드 부트캠프 수료생들에게 딱 맞는 포지션들을 모아봤어요!?',
    link: '/theme/wecode',
    detail: {
      headTitle: '점핏 x 위코드',
      bgColor: '#590df3',
      ...createImageURL('/kv_wecode_'),
    },
  },
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_krafton.webp',
    title: `기본기를 갖춘 개발자 
크래프톤 정글 채용관`,
    subTitle: '기본기부터 협업능력까지 갖춘 크래프톤 정글 수료생들에게 딱! 알맞는 포지션들을 모아봤어요!',
    link: '/theme/krafton',
    detail: {
      headTitle: '점핏 x 크래프톤',
      bgColor: '#00d67a',
      ...createImageURL('/kv_krafton_'),
    },
  },
  {
    image: CDN_PATH + '/jumpit/position/themes/banners/home/pc_themes_wework.webp',
    title: `트렌디한 공유 오피스 
위워크 멤버사 채용관`,
    subTitle: '트렌디한 사무실에서 업무 능률 UP! 하고 싶은 개발자에게 딱!',
    link: '/theme/wework',
    detail: {
      headTitle: '점핏 x 위워크',
      bgColor: '#232428',
      ...createImageURL('/wework/kv_wework_'),
    },
  },
];
