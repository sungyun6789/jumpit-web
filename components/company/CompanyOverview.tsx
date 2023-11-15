import styled from '@emotion/styled';
import Image from 'next/image';
import { useContext, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { CompanyInfoContext } from '~/context/CompanyInfoProvider';

/** 뷰어를 사용하지 않고 처음 화면에 보여줄 이미지 목록 길이 */
const IMAGE_LENGTH = 3;

const CompanyOverview = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const data = useContext(CompanyInfoContext);
  const images = data?.profileImages.slice(0, IMAGE_LENGTH);
  const allImages = (data?.profileImages ?? []).map((profile) => profile.imagePath);

  const openImageViewer = (index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Block>
        <Title>회사 소개</Title>

        <Content open={isDescriptionOpen}>{data?.companyService.description}</Content>

        <ButtonWrap>
          <OpacityBox open={isDescriptionOpen} />
          <Button onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
            기업/서비스 소개 더보기
            <Icon
              open={isDescriptionOpen}
              src="https://www.jumpit.co.kr/assets/images/arrow-down-black.svg"
              width={16}
              height={16}
              alt="아래쪽 화살표"
            />
          </Button>
        </ButtonWrap>

        <CompanyImageWrap>
          {images?.map((profile, index) => (
            <PositionBlock key={profile.imagePath} onClick={() => openImageViewer(index)}>
              <CompanyImage src={profile.imagePath} width={202} height={134} alt="회사 이미지" />
              {index + 1 === IMAGE_LENGTH && <MoreCnt>+ {allImages.length - images.length}</MoreCnt>}
            </PositionBlock>
          ))}
        </CompanyImageWrap>
      </Block>

      {isViewerOpen && (
        <Viewer>
          <ImageViewer
            src={allImages}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            leftArrowComponent={
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="32" fill="#fff" opacity="0.9"></circle>
                <path stroke="#222" strokeWidth="2" d="M35.334 21.333 24.667 32l10.667 10.667"></path>
              </svg>
            }
            rightArrowComponent={
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="32" fill="#fff" opacity="0.9"></circle>
                <path stroke="#222" strokeWidth="2" d="M28.666 42.667 39.333 32 28.666 21.333"></path>
              </svg>
            }
          />
        </Viewer>
      )}
    </>
  );
};

export default CompanyOverview;

const Block = styled.section`
  margin-bottom: 56px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.5px;
`;

const Content = styled.pre<{ open: boolean }>`
  font-size: 16px;
  color: #444;
  line-height: 28px;
  letter-spacing: -0.5px;
  word-break: break-all;
  white-space: pre-line;
  overflow-wrap: break-word;
  font-family: inherit;

  ${(props) =>
    !props.open && {
      maxHeight: '168px',
      overflow: 'hidden',
    }}
`;

const ButtonWrap = styled.div`
  position: relative;
  padding-top: 16px;
`;

const OpacityBox = styled.div<{ open: boolean }>`
  display: ${(props) => (!props.open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  margin-top: -52px;
  height: 32px;
  background: linear-gradient(rgba(255, 255, 255, 0.5) 0%, rgb(255, 255, 255) 100%);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  position: relative;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #222;
  padding: 11px 33px 11px 39px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const Icon = styled(Image)<{ open: boolean }>`
  ${(props) =>
    props.open && {
      transform: 'rotate(180deg)',
    }}
`;

const CompanyImageWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const CompanyImage = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
`;

const PositionBlock = styled.div`
  position: relative;
`;

const MoreCnt = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: #fff;
  cursor: pointer;
`;

const Viewer = styled.div`
  .react-simple-image-viewer__modal {
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .react-simple-image-viewer__close {
    font-weight: 400;
    opacity: unset;
  }

  .react-simple-image-viewer__previous {
    opacity: unset;
  }

  .react-simple-image-viewer__next {
    opacity: unset;
  }
`;
