import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect } from 'react';
import { noto } from '~/pages/_app';

import PortalModal from './PortalModal';

interface Props {
  queryCuration: string | string[] | undefined;
  curations: {
    emoticon: string;
    explain: string;
    id: number | string;
    name: string;
    tags: string[];
  }[];
  close: () => void;
  click: (id: number | string) => void;
}

const RookieMobileCurationSelectModal = ({ queryCuration, curations, click, close }: Props) => {
  const reset = () => {
    click('');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 스크롤 고정
    scrollTo(0, 0); // 스크롤 맨 위로 이동

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <PortalModal>
      <Block className={noto.className}>
        <CloseLayout>
          <CloseButton onClick={close}>
            <Image src="/closeIcon.svg" width={24} height={24} alt="close" />
          </CloseButton>
        </CloseLayout>

        <Layout>
          <Title>더.루키 큐레이션</Title>
          <SubTitle>원하는 큐레이션을 선택하세요</SubTitle>

          <MTagRow>
            {curations.slice(0, 5).map(({ id, emoticon, name }) => (
              <Tag key={name} isSelected={id.toString() === queryCuration} onClick={() => click(id)}>
                {emoticon + ' ' + name}
              </Tag>
            ))}
          </MTagRow>

          <MTagRow>
            {curations.slice(5, curations.length).map(({ id, emoticon, name }) => (
              <Tag key={name} isSelected={id.toString() === queryCuration} onClick={() => click(id)}>
                {emoticon + ' ' + name}
              </Tag>
            ))}
          </MTagRow>
        </Layout>

        <ButtonLayout>
          <ResetButton onClick={reset}>초기화</ResetButton>
          <ApplyButton onClick={close}>적용하기</ApplyButton>
        </ButtonLayout>
      </Block>
    </PortalModal>
  );
};

export default RookieMobileCurationSelectModal;

const Block = styled.main`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 2;
`;

const CloseLayout = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  padding-bottom: 2px;
  margin: 20px;
  background-color: #fff;
  border: none;
`;

const Layout = styled.div`
  margin-left: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
`;

const SubTitle = styled.p`
  margin: 16px 0 18px;
  font-size: 15px;
  color: #888888;
  font-weight: 500;
  line-height: 32px;
`;

const MTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.button<{ isSelected: boolean }>`
  margin: 0 8px 8px 0;
  padding: 6px 16px;
  line-height: 22px;
  font-size: 15px;
  letter-spacing: -0.5px;
  border-radius: 20px;
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
  border: ${(props) => (props.isSelected ? '1px solid #7251f3' : '1px solid #e4e4e4')};
  color: ${(props) => (props.isSelected ? '#7251f3' : '#444444')};
  background-color: #fff;
  cursor: pointer;

  :hover {
    background-color: #f4f4f4;
  }
`;

const ButtonLayout = styled.div`
  width: 100%;
  position: fixed;
  bottom: 16px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Btn = styled.button`
  width: calc(50% - 22px);
  height: 48px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  border-radius: 3px;
`;

const ResetButton = styled(Btn)`
  background-color: #e4e4e4;
  color: #000;
`;

const ApplyButton = styled(Btn)`
  background-color: #000;
  color: #fff;
`;
