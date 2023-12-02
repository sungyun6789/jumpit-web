import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import COLORS from '~/constants/colors';

const SOCIALS = ['naver', 'google', 'github', 'apple'];

const SocialLogin = () => {
  return (
    <>
      <Line />
      <Block>
        <SocialWrap>
          {SOCIALS.map((social) => (
            <Image key={social} src={social + '_logo.svg'} width={44} height={44} alt={social + '로그인'} />
          ))}
        </SocialWrap>
        <CompanyCustomerDescription>
          기업 고객이신가요?
          <CompanyCustomerLink href="https://biz.jumpit.co.kr" target="_blank">
            기업서비스 바로가기
          </CompanyCustomerLink>
        </CompanyCustomerDescription>
      </Block>
    </>
  );
};

export default SocialLogin;

const Line = styled.hr`
  border-right: none;
  border-bottom: none;
  border-left: none;
  border-top: 1px solid #eaeaea;
  height: 1px;
  font-size: 14px;
  line-height: 20px;
  overflow: visible;
  text-align: center;

  ::after {
    color: #888;
    background-color: #fff;
    content: 'SNS로 3초만에 로그인';
    padding: 0 20px;
    position: relative;
    top: -10px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`;

const SocialWrap = styled.div`
  display: flex;
  gap: 24px;

  img {
    cursor: pointer;
  }
`;

const CompanyCustomerDescription = styled.p`
  margin-top: 28px;
  font-size: 13px;
  line-height: 22px;
  color: #444444;
`;

const CompanyCustomerLink = styled(Link)`
  margin-left: 4px;
  font-weight: 500;
  color: ${COLORS.primary};
  text-decoration: underline;
  font-size: 13px;
  line-height: 22px;
`;
