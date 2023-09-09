import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import COLORS from '~/constants/colors';
import { CDN_PATH } from '~/constants/path';

import Button from '../common/Button';

const AppDownload = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const close = () => setIsOpen(false);

  return (
    <ViewBreakPoint>
      <Block>
        <DownloadBox>
          <CloseIcon src="/closeIcon.svg" width={24} height={24} alt="close" onClick={close} />

          <DownloadLogo
            src={CDN_PATH + '/jumpit/personal/ic_app_download.png'}
            width={101}
            height={100}
            alt="app download"
          />

          <DescriptionBox>
            <Description>빠르고 편리한 점핏 앱!</Description>
            <Description>
              <Bold>점핏 앱</Bold> 속도를 경험해보세요
            </Description>
          </DescriptionBox>

          <ButtonBox>
            <DownloadButton href="/" target="_blank">
              앱 이용하기
            </DownloadButton>

            <SkipButton onClick={close}>오늘은 이대로 볼래요</SkipButton>
          </ButtonBox>
        </DownloadBox>
      </Block>
    </ViewBreakPoint>
  );
};

export default AppDownload;

const ViewBreakPoint = styled.div`
  display: none;

  @media (max-width: 829px) {
    display: block;
  }
`;

const Block = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #00000099;
`;

const CloseIcon = styled(Image)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const DownloadBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  padding: 40px 16px 24px;
`;

const DownloadLogo = styled(Image)`
  display: block;
  margin: auto;
`;

const DescriptionBox = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Description = styled.span`
  font-size: 16px;
  letter-spacing: -0.5px;
`;

const Bold = styled.b`
  font-size: 16px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
`;

const DownloadButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  color: #fff;
  background-color: ${COLORS.primary};
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
`;

const SkipButton = styled(Button)`
  line-height: 32px;
  color: #888888;
  font-size: 14px;
`;
