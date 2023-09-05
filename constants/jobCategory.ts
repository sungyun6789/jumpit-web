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

interface TechStacks {
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
      { name: 'Java', logo: 'https://cdn.jumpit.co.kr/images/stacks/java.png' },
      { name: 'Spring Boot', logo: 'https://cdn.jumpit.co.kr/images/stacks/springboot.png' },
      { name: 'Node.js', logo: 'https://cdn.jumpit.co.kr/images/stacks/node.js.png' },
      { name: 'Python', logo: 'https://cdn.jumpit.co.kr/images/stacks/python.png' },
      { name: 'Django', logo: 'https://cdn.jumpit.co.kr/images/stacks/django.png' },
      { name: 'PHP', logo: 'https://cdn.jumpit.co.kr/images/stacks/php.png' },
      { name: 'C++', logo: 'https://cdn.jumpit.co.kr/images/stacks/CPlusPlus.png' },
      { name: 'C#', logo: 'https://cdn.jumpit.co.kr/images/stacks/CSharp.png' },
      { name: 'AWS', logo: 'https://cdn.jumpit.co.kr/images/stacks/aws.png' },
      { name: 'MySQL', logo: 'https://cdn.jumpit.co.kr/images/stacks/mysql.png' },
      { name: 'Oracle', logo: 'https://cdn.jumpit.co.kr/images/stacks/oracle.png' },
    ],
  },
  '프론트엔드 개발자': {
    no: 2,
    techStacks: [
      { name: 'React', logo: 'https://cdn.jumpit.co.kr/images/stacks/react.png' },
      { name: 'Vue.js', logo: 'https://cdn.jumpit.co.kr/images/stacks/vue.js.png' },
      { name: 'JavaScript', logo: 'https://cdn.jumpit.co.kr/images/stacks/javascript.png' },
      { name: 'TypeScript', logo: 'https://cdn.jumpit.co.kr/images/stacks/typescript.png' },
      { name: 'Node.js', logo: 'https://cdn.jumpit.co.kr/images/stacks/node.js.png' },
      { name: 'Svelte', logo: 'https://cdn.jumpit.co.kr/images/stacks/svelte.png' },
      { name: 'HTML5', logo: 'https://cdn.jumpit.co.kr/images/stacks/html5.png' },
      { name: 'CSS 3', logo: 'https://cdn.jumpit.co.kr/images/stacks/css3.png' },
      { name: 'AngularJS', logo: 'https://cdn.jumpit.co.kr/images/stacks/angularjs.png' },
      { name: 'jQuery', logo: 'https://cdn.jumpit.co.kr/images/stacks/jquery.png' },
    ],
  },
  '웹 풀스택 개발자': {
    no: 3,
    techStacks: [
      { name: 'JavaScript', logo: 'https://cdn.jumpit.co.kr/images/stacks/javascript.png' },
      { name: 'React', logo: 'https://cdn.jumpit.co.kr/images/stacks/react.png' },
      { name: 'Vue.js', logo: 'https://cdn.jumpit.co.kr/images/stacks/vue.js.png' },
      { name: 'jQuery', logo: 'https://cdn.jumpit.co.kr/images/stacks/jquery.png' },
      { name: 'Node.js', logo: 'https://cdn.jumpit.co.kr/images/stacks/node.js.png' },
      { name: 'HTML5', logo: 'https://cdn.jumpit.co.kr/images/stacks/html5.png' },
      { name: 'CSS 3', logo: 'https://cdn.jumpit.co.kr/images/stacks/css3.png' },
      { name: 'Java', logo: 'https://cdn.jumpit.co.kr/images/stacks/java.png' },
      { name: 'PHP', logo: 'https://cdn.jumpit.co.kr/images/stacks/php.png' },
    ],
  },
  '안드로이드 개발자': {
    no: 4,
    techStacks: [
      { name: 'Kotlin', logo: 'https://cdn.jumpit.co.kr/images/stacks/kotlin.png' },
      { name: 'Java', logo: 'https://cdn.jumpit.co.kr/images/stacks/java.png' },
      { name: 'C++', logo: 'https://cdn.jumpit.co.kr/images/stacks/CPlusPlus.png' },
      { name: 'RxJava', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
    ],
  },
  'IOS 개발자': {
    no: 16,
    techStacks: [
      { name: 'Swift', logo: 'https://cdn.jumpit.co.kr/images/stacks/swift.png' },
      { name: 'Objective-C', logo: 'https://cdn.jumpit.co.kr/images/stacks/objective-c.png' },
      { name: 'Rxswift', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'SwiftUI', logo: 'https://cdn.jumpit.co.kr/images/stacks/swiftui.png' },
      { name: 'Xcode', logo: 'https://cdn.jumpit.co.kr/images/stacks/xcode.png' },
      { name: 'C++', logo: 'https://cdn.jumpit.co.kr/images/stacks/CPlusPlus.png' },
    ],
  },
  '크로스플랫폼 앱개발자': {
    no: 18,
    techStacks: [
      { name: 'Flutter', logo: 'https://cdn.jumpit.co.kr/images/stacks/flutter.png' },
      { name: 'React Native', logo: 'https://cdn.jumpit.co.kr/images/stacks/reactnative.png' },
      { name: 'JavaScript', logo: 'https://cdn.jumpit.co.kr/images/stacks/javascript.png' },
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
      { name: 'MySQL', logo: 'https://cdn.jumpit.co.kr/images/stacks/mysql.png' },
      { name: 'Oracle', logo: 'https://cdn.jumpit.co.kr/images/stacks/oracle.png' },
      { name: 'MSSQL', logo: 'https://cdn.jumpit.co.kr/images/stacks/mssql.png' },
      { name: 'Postgresql', logo: 'https://cdn.jumpit.co.kr/images/stacks/postgresql.png' },
      { name: 'NoSql', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'MariaDB', logo: 'https://cdn.jumpit.co.kr/images/stacks/mariadb.png' },
      { name: 'MongoDB', logo: 'https://cdn.jumpit.co.kr/images/stacks/mongodb.png' },
    ],
  },
  '빅데이터 엔지니어': {
    no: 19,
    techStacks: [
      { name: 'Python', logo: 'https://cdn.jumpit.co.kr/images/stacks/python.png' },
      { name: 'SQL', logo: 'https://cdn.jumpit.co.kr/images/stacks/sql.png' },
      { name: 'R', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'Hadoop', logo: 'https://cdn.jumpit.co.kr/images/stacks/hadoop.png' },
      { name: 'Spark', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'Java', logo: 'https://cdn.jumpit.co.kr/images/stacks/java.png' },
      { name: 'Kafka', logo: 'https://cdn.jumpit.co.kr/images/stacks/kafka.png' },
      { name: 'TensorFlow', logo: 'https://cdn.jumpit.co.kr/images/stacks/tensorflow.png' },
      { name: 'PyTorch', logo: 'https://cdn.jumpit.co.kr/images/stacks/pytorch.png' },
      { name: 'Elasticsearch', logo: 'https://cdn.jumpit.co.kr/images/stacks/elasticsearch.png' },
    ],
  },
  '인공지능/머신러닝': {
    no: 8,
    techStacks: [
      { name: 'Python', logo: 'https://cdn.jumpit.co.kr/images/stacks/python.png' },
      { name: 'TensorFlow', logo: 'https://cdn.jumpit.co.kr/images/stacks/tensorflow.png' },
      { name: 'PyTorch', logo: 'https://cdn.jumpit.co.kr/images/stacks/pytorch.png' },
      { name: 'C++', logo: 'https://cdn.jumpit.co.kr/images/stacks/CPlusPlus.png' },
      { name: 'C', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'OpenCV', logo: 'https://cdn.jumpit.co.kr/images/stacks/OpenCV.png' },
      { name: 'Java', logo: 'https://cdn.jumpit.co.kr/images/stacks/java.png' },
    ],
  },
  'devops/시스템 엔지니어': {
    no: 9,
    techStacks: [
      { name: 'AWS', logo: 'https://cdn.jumpit.co.kr/images/stacks/aws.png' },
      { name: 'Linux', logo: 'https://cdn.jumpit.co.kr/images/stacks/linux.png' },
      { name: 'Python', logo: 'https://cdn.jumpit.co.kr/images/stacks/python.png' },
      { name: 'Kubernetes', logo: 'https://cdn.jumpit.co.kr/images/stacks/kubernetes.png' },
      { name: 'Docker', logo: 'https://cdn.jumpit.co.kr/images/stacks/docker.png' },
      { name: 'Network', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'GCP', logo: 'https://cdn.jumpit.co.kr/images/stacks/googlecloudplatform.png' },
      { name: 'Windows', logo: 'https://cdn.jumpit.co.kr/images/stacks/windows.png' },
      { name: 'AZURE', logo: 'https://cdn.jumpit.co.kr/images/stacks/azure.png' },
      { name: 'Terraform', logo: 'https://cdn.jumpit.co.kr/images/stacks/terraform.png' },
    ],
  },
  '정보보안 담당자': {
    no: 10,
    techStacks: [
      { name: 'Network', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'ISMS', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'AWS', logo: 'https://cdn.jumpit.co.kr/images/stacks/aws.png' },
      { name: 'CISA', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'CISSP', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'Firewall', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'VPN', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'IPS', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'CPPG', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
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
      { name: 'C', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'FW', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'Embedded', logo: 'https://cdn.jumpit.co.kr/images/stacks/embedded.png' },
      { name: 'C++', logo: 'https://cdn.jumpit.co.kr/images/stacks/CPlusPlus.png' },
      { name: 'Linux', logo: 'https://cdn.jumpit.co.kr/images/stacks/linux.png' },
      { name: 'Pads', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'FPGA', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'PCB', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'Python', logo: 'https://cdn.jumpit.co.kr/images/stacks/python.png' },
      { name: 'RF', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
    ],
  },
  'SW/솔루션': {
    no: 15,
    techStacks: [
      { name: 'C++', logo: 'https://cdn.jumpit.co.kr/images/stacks/CPlusPlus.png' },
      { name: 'C', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'C#', logo: 'https://cdn.jumpit.co.kr/images/stacks/CSharp.png' },
      { name: 'Java', logo: 'https://cdn.jumpit.co.kr/images/stacks/java.png' },
      { name: 'Linux', logo: 'https://cdn.jumpit.co.kr/images/stacks/linux.png' },
      { name: 'Python', logo: 'https://cdn.jumpit.co.kr/images/stacks/python.png' },
      { name: 'Embedded', logo: 'https://cdn.jumpit.co.kr/images/stacks/embedded.png' },
      { name: 'JavaScript', logo: 'https://cdn.jumpit.co.kr/images/stacks/javascript.png' },
      { name: 'Oracle', logo: 'https://cdn.jumpit.co.kr/images/stacks/oracle.png' },
      { name: '.NET', logo: 'https://cdn.jumpit.co.kr/images/stacks/ASP_NET.png' },
      { name: 'MSSQL', logo: 'https://cdn.jumpit.co.kr/images/stacks/mssql.png' },
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
      { name: 'Blockchain', logo: 'https://cdn.jumpit.co.kr/images/stacks/Blockchain.png' },
      { name: 'Solidity', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'Java', logo: 'https://cdn.jumpit.co.kr/images/stacks/java.png' },
      { name: 'Nft', logo: 'https://cdn.jumpit.co.kr/images/stacks/noStack.png' },
      { name: 'Node.js', logo: 'https://cdn.jumpit.co.kr/images/stacks/node.js.png' },
      { name: 'Golang', logo: 'https://cdn.jumpit.co.kr/images/stacks/Golang.png' },
      { name: 'Python', logo: 'https://cdn.jumpit.co.kr/images/stacks/python.png' },
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
