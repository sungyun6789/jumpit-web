import styled from '@emotion/styled';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { CompanyInfoContext } from '~/context/CompanyInfoProvider';

const CompanyOverview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useContext(CompanyInfoContext);

  return (
    <Block>
      <Title>회사 소개</Title>

      <Content open={isOpen}>{data?.companyService.description}</Content>

      <ButtonWrap>
        <OpacityBox open={isOpen} />
        <Button onClick={() => setIsOpen(!isOpen)}>
          기업/서비스 소개 더보기
          <Icon
            open={isOpen}
            src="https://www.jumpit.co.kr/assets/images/arrow-down-black.svg"
            width={16}
            height={16}
            alt="아래쪽 화살표"
          />
        </Button>
      </ButtonWrap>

      {/* @todo 이미지 클릭시 뷰어 띄우기 */}
      <CompanyImageWrap>
        {data?.profileImages.map((profile) => (
          <CompanyImage key={profile.imagePath} src={profile.imagePath} width={202} height={134} alt="회사 이미지" />
        ))}
      </CompanyImageWrap>
    </Block>
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
  border-radius: 4px;
`;
