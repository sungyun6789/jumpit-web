import styled from '@emotion/styled';
import Link from 'next/link';
import { useContext } from 'react';
import COLORS from '~/constants/colors';
import { HomeDataContext } from '~/context/HomeDataProvier';
import { mont } from '~/pages/_app';

const Notice = () => {
  const data = useContext(HomeDataContext);
  const noticeBanner = data?.noticeBanners[0];
  const noticeDate = noticeBanner?.createAt.slice(0, -3);

  return (
    <Block>
      <NoticeBox>
        <Title className={mont.className}>Notice</Title>
        <List>
          <Content>
            <Link href={noticeBanner?.url ?? '/'} target="_blank">
              {noticeBanner?.title}
            </Link>
          </Content>
          <NoticeDate>{noticeDate}</NoticeDate>
        </List>
      </NoticeBox>
    </Block>
  );
};

export default Notice;

const Block = styled.div`
  width: 340px;
  padding: 20px 20px 26px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  margin-top: 20px;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 20px;
    border: none;
    border-bottom: 1px solid #e4e4e4;
    border-radius: 0;
    background-color: #fbfbfb;
  }
`;

const NoticeBox = styled.div`
  height: 50px;

  @media (max-width: 1080px) {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: ${COLORS.primary};
  font-size: 13px;
  line-height: 24px;

  @media (max-width: 1080px) {
    width: 70px;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;

  @media (max-width: 1080px) {
    max-width: calc(100% - 50px);
    width: 100%;
    margin-top: 0;
  }
`;

const Content = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  cursor: pointer;
`;

const NoticeDate = styled.span`
  color: #999999;
  font-size: 14px;
`;
