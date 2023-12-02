import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const GuestProfile = () => {
  return (
    <Block>
      <Content>
        <Description>
          점핏 앱 다운로드 하고
          <br />
          편리하게 이용해보세요.
        </Description>

        <Store>
          <Image src="/app_store.svg" width={78} height={16} alt="앱 스토어" />
          <Image src="/google_play.svg" width={92} height={16} alt="구글 플레이" />
        </Store>

        <QRCode src="https://www.jumpit.co.kr/assets/ic_qr_code.svg" width={80} height={80} alt="큐알 코드" />

        <Link href="/login">
          <Button>회원가입 / 로그인</Button>
        </Link>
      </Content>
    </Block>
  );
};

export default GuestProfile;

const Block = styled.div`
  position: relative;
  width: 340px;
  height: 220px;
  padding: 32px 20px 20px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  background-color: #fafafa;
`;

const Content = styled.div`
  height: 168px;
`;

const Description = styled.p`
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  color: #222222;
  margin-bottom: 5px;
`;

const Store = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 17px;
`;

const QRCode = styled(Image)`
  position: absolute;
  top: 32px;
  right: 20px;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 28px;
  border: 1px solid #000;
  background-color: #000;
  cursor: pointer;
  border-radius: 8px;

  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 46px;

  :hover {
    background-color: #333333;
    border-color: #333333;
  }
`;
