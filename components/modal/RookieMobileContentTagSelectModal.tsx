import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect } from 'react';
import { noto } from '~/pages/_app';

import PortalModal from './PortalModal';

import type { TagModel } from '~/pages/api/content/rookies';

interface Props {
  tags: TagModel[];
  onClose: () => void;
  onClick: (value: TagModel) => void;
  currentId: string | number | undefined;
}

const RookieMobileContentTagSelectModal = ({ tags, onClose, onClick, currentId }: Props) => {
  const reset = () => {
    onClick({ id: '', name: '전체' });
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
      <Block>
        <CloseButtonLayout>
          <CloseButton onClick={onClose}>
            <Image src="/closeIcon.svg" width={24} height={24} alt="close" />
          </CloseButton>
        </CloseButtonLayout>

        <div className={noto.className}>
          <Title>#태그</Title>
          <Description>원하는 태그를 선택해주세요</Description>
        </div>

        <TagLayout>
          <div>
            {tags.slice(0, 5).map((value) => (
              <Tag key={value.id} isSelected={value.id == currentId} onClick={() => onClick(value)}>
                {value.name}
              </Tag>
            ))}
          </div>

          <div>
            {tags.slice(5, tags.length).map((value) => (
              <Tag key={value.id} isSelected={value.id == currentId} onClick={() => onClick(value)}>
                {value.name}
              </Tag>
            ))}
          </div>
        </TagLayout>

        <ButtonLayout>
          <ResetButton onClick={reset}>초기화</ResetButton>
          <ApplyButton onClick={onClose}>적용하기</ApplyButton>
        </ButtonLayout>
      </Block>
    </PortalModal>
  );
};

export default RookieMobileContentTagSelectModal;

const Block = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 2;
`;

const CloseButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 68.5px;
`;

const CloseButton = styled.button`
  box-sizing: content-box;
  margin: 20px;
  background-color: #fff;
  border: none;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  padding-left: 16px;
`;

const Description = styled.p`
  margin: 16px 0 18px;
  font-size: 15px;
  color: #888888;
  font-weight: 500;
  line-height: 32px;
  padding-left: 16px;
`;

const TagLayout = styled.div`
  padding-left: 16px;
`;

const Tag = styled.button<{ isSelected: boolean }>`
  margin: 0px 8px 8px 0px;
  font-size: 15px;
  line-height: 22px;
  padding: 6px 16px;
  border: ${(props) => (props.isSelected ? '1px solid #7251f3' : '1px solid #e4e4e4')};
  border-radius: 20px;
  letter-spacing: -0.5px;
  flex: 0 0 auto;
  background-color: #fff;
  color: ${(props) => (props.isSelected ? '#7251f3' : '#444444')};

  ${(props) =>
    props.isSelected && {
      fontWeight: 'bold',
    }}
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
