type CategoryType =
  | '전체'
  | '서버/백엔드 개발자'
  | '프론트엔드 개발자'
  | '웹 풀스택 개발자'
  | '안드로이드 개발자'
  | 'IOS 개발자'
  | '크로스플랫폼 앱개발자'
  | '게임 클라이언트 개발자'
  | '게임 서버 개발자'
  | 'DBA'
  | '빅데이터 엔지니어'
  | '인공지능/머신러닝'
  | 'devops/시스템 엔지니어'
  | '정보보안 담당자'
  | 'QA 엔지니어'
  | '개발 PM'
  | 'HW/임베디드'
  | 'SW/솔루션'
  | '웹퍼블리셔'
  | 'VR/AR/3D'
  | '블록체인'
  | '기술지원';

export interface TechStacks {
  no: number;
  techStacks: {
    name: string;
    logo: string;
  }[];
}

export const JOB_CATEGORY: Record<CategoryType, TechStacks> = {
  전체: {
    no: 0,
    techStacks: [],
  },
  '서버/백엔드 개발자': {
    no: 1,
    techStacks: [
      { name: 'Java', logo: '/java.png' },
      { name: 'Spring Boot', logo: '/springboot.png' },
      { name: 'Node.js', logo: '/node.js.png' },
      { name: 'Python', logo: '/python.png' },
      { name: 'Django', logo: '/django.png' },
      { name: 'PHP', logo: '/php.png' },
      { name: 'C++', logo: '/CPlusPlus.png' },
      { name: 'C#', logo: '/CSharp.png' },
      { name: 'AWS', logo: '/aws.png' },
      { name: 'MySQL', logo: '/mysql.png' },
      { name: 'Oracle', logo: '/oracle.png' },
    ],
  },
  '프론트엔드 개발자': {
    no: 2,
    techStacks: [
      { name: 'React', logo: '/react.png' },
      { name: 'Vue.js', logo: '/vue.js.png' },
      { name: 'JavaScript', logo: '/javascript.png' },
      { name: 'TypeScript', logo: '/typescript.png' },
      { name: 'Node.js', logo: '/node.js.png' },
      { name: 'Svelte', logo: '/svelte.png' },
      { name: 'HTML5', logo: '/html5.png' },
      { name: 'CSS 3', logo: '/css3.png' },
      { name: 'AngularJS', logo: '/angularjs.png' },
      { name: 'jQuery', logo: '/jquery.png' },
    ],
  },
  '웹 풀스택 개발자': {
    no: 3,
    techStacks: [
      { name: 'JavaScript', logo: '/javascript.png' },
      { name: 'React', logo: '/react.png' },
      { name: 'Vue.js', logo: '/vue.js.png' },
      { name: 'jQuery', logo: '/jquery.png' },
      { name: 'Node.js', logo: '/node.js.png' },
      { name: 'HTML5', logo: '/html5.png' },
      { name: 'CSS 3', logo: '/css3.png' },
      { name: 'Java', logo: '/java.png' },
      { name: 'PHP', logo: '/php.png' },
    ],
  },
  '안드로이드 개발자': {
    no: 4,
    techStacks: [
      { name: 'Kotlin', logo: '/kotlin.png' },
      { name: 'Java', logo: '/java.png' },
      { name: 'C++', logo: '/CPlusPlus.png' },
      { name: 'RxJava', logo: '/noStack.png' },
    ],
  },
  'IOS 개발자': {
    no: 16,
    techStacks: [
      { name: 'Swift', logo: '/swift.png' },
      { name: 'Objective-C', logo: '/objective-c.png' },
      { name: 'Rxswift', logo: '/noStack.png' },
      { name: 'SwiftUI', logo: '/swiftui.png' },
      { name: 'Xcode', logo: '/xcode.png' },
      { name: 'C++', logo: '/CPlusPlus.png' },
    ],
  },
  '크로스플랫폼 앱개발자': {
    no: 18,
    techStacks: [
      { name: 'Flutter', logo: '/flutter.png' },
      { name: 'React Native', logo: '/reactnative.png' },
      { name: 'JavaScript', logo: '/javascript.png' },
    ],
  },
  '게임 클라이언트 개발자': {
    no: 5,
    techStacks: [],
  },
  '게임 서버 개발자': {
    no: 6,
    techStacks: [],
  },
  DBA: {
    no: 7,
    techStacks: [
      { name: 'MySQL', logo: '/mysql.png' },
      { name: 'Oracle', logo: '/oracle.png' },
      { name: 'MSSQL', logo: '/mssql.png' },
      { name: 'Postgresql', logo: '/postgresql.png' },
      { name: 'NoSql', logo: '/noStack.png' },
      { name: 'MariaDB', logo: '/mariadb.png' },
      { name: 'MongoDB', logo: '/mongodb.png' },
    ],
  },
  '빅데이터 엔지니어': {
    no: 19,
    techStacks: [
      { name: 'Python', logo: '/python.png' },
      { name: 'SQL', logo: '/sql.png' },
      { name: 'R', logo: '/noStack.png' },
      { name: 'Hadoop', logo: '/hadoop.png' },
      { name: 'Spark', logo: '/noStack.png' },
      { name: 'Java', logo: '/java.png' },
      { name: 'Kafka', logo: '/kafka.png' },
      { name: 'TensorFlow', logo: '/tensorflow.png' },
      { name: 'PyTorch', logo: '/pytorch.png' },
      { name: 'Elasticsearch', logo: '/elasticsearch.png' },
    ],
  },
  '인공지능/머신러닝': {
    no: 8,
    techStacks: [
      { name: 'Python', logo: '/python.png' },
      { name: 'TensorFlow', logo: '/tensorflow.png' },
      { name: 'PyTorch', logo: '/pytorch.png' },
      { name: 'C++', logo: '/CPlusPlus.png' },
      { name: 'C', logo: '/noStack.png' },
      { name: 'OpenCV', logo: '/OpenCV.png' },
      { name: 'Java', logo: '/java.png' },
    ],
  },
  'devops/시스템 엔지니어': {
    no: 9,
    techStacks: [
      { name: 'AWS', logo: '/aws.png' },
      { name: 'Linux', logo: '/linux.png' },
      { name: 'Python', logo: '/python.png' },
      { name: 'Kubernetes', logo: '/kubernetes.png' },
      { name: 'Docker', logo: '/docker.png' },
      { name: 'Network', logo: '/noStack.png' },
      { name: 'GCP', logo: '/googlecloudplatform.png' },
      { name: 'Windows', logo: '/windows.png' },
      { name: 'AZURE', logo: '/azure.png' },
      { name: 'Terraform', logo: '/terraform.png' },
    ],
  },
  '정보보안 담당자': {
    no: 10,
    techStacks: [
      { name: 'Network', logo: '/noStack.png' },
      { name: 'ISMS', logo: '/noStack.png' },
      { name: 'AWS', logo: '/aws.png' },
      { name: 'CISA', logo: '/noStack.png' },
      { name: 'CISSP', logo: '/noStack.png' },
      { name: 'Firewall', logo: '/noStack.png' },
      { name: 'VPN', logo: '/noStack.png' },
      { name: 'IPS', logo: '/noStack.png' },
      { name: 'CPPG', logo: '/noStack.png' },
    ],
  },
  'QA 엔지니어': {
    no: 11,
    techStacks: [],
  },
  '개발 PM': {
    no: 12,
    techStacks: [],
  },
  'HW/임베디드': {
    no: 13,
    techStacks: [
      { name: 'C', logo: '/noStack.png' },
      { name: 'FW', logo: '/noStack.png' },
      { name: 'Embedded', logo: '/embedded.png' },
      { name: 'C++', logo: '/CPlusPlus.png' },
      { name: 'Linux', logo: '/linux.png' },
      { name: 'Pads', logo: '/noStack.png' },
      { name: 'FPGA', logo: '/noStack.png' },
      { name: 'PCB', logo: '/noStack.png' },
      { name: 'Python', logo: '/python.png' },
      { name: 'RF', logo: '/noStack.png' },
    ],
  },
  'SW/솔루션': {
    no: 15,
    techStacks: [
      { name: 'C++', logo: '/CPlusPlus.png' },
      { name: 'C', logo: '/noStack.png' },
      { name: 'C#', logo: '/CSharp.png' },
      { name: 'Java', logo: '/java.png' },
      { name: 'Linux', logo: '/linux.png' },
      { name: 'Python', logo: '/python.png' },
      { name: 'Embedded', logo: '/embedded.png' },
      { name: 'JavaScript', logo: '/javascript.png' },
      { name: 'Oracle', logo: '/oracle.png' },
      { name: '.NET', logo: '/ASP_NET.png' },
      { name: 'MSSQL', logo: '/mssql.png' },
    ],
  },
  웹퍼블리셔: {
    no: 17,
    techStacks: [],
  },
  'VR/AR/3D': {
    no: 20,
    techStacks: [],
  },
  블록체인: {
    no: 22,
    techStacks: [
      { name: 'Blockchain', logo: '/Blockchain.png' },
      { name: 'Solidity', logo: '/noStack.png' },
      { name: 'Java', logo: '/java.png' },
      { name: 'Nft', logo: '/noStack.png' },
      { name: 'Node.js', logo: '/node.js.png' },
      { name: 'Golang', logo: '/Golang.png' },
      { name: 'Python', logo: '/python.png' },
    ],
  },
  기술지원: {
    no: 21,
    techStacks: [],
  },
};

export const JOB_NUMBER: Record<number, CategoryType> = {
  0: '전체',
  1: '서버/백엔드 개발자',
  2: '프론트엔드 개발자',
  3: '웹 풀스택 개발자',
  4: '안드로이드 개발자',
  16: 'IOS 개발자',
  18: '크로스플랫폼 앱개발자',
  5: '게임 클라이언트 개발자',
  6: '게임 서버 개발자',
  7: 'DBA',
  19: '빅데이터 엔지니어',
  8: '인공지능/머신러닝',
  9: 'devops/시스템 엔지니어',
  10: '정보보안 담당자',
  11: 'QA 엔지니어',
  12: '개발 PM',
  13: 'HW/임베디드',
  15: 'SW/솔루션',
  17: '웹퍼블리셔',
  20: 'VR/AR/3D',
  22: '블록체인',
  21: '기술지원',
};
