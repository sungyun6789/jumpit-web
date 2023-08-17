import styled from '@emotion/styled';

// 데스크탑에서만 보여주고 싶은 경우
export const DesktopView = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
`;

// 태블릿 이하에서만 보여주고 싶은 경우
export const TabletView = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
  }
`;
