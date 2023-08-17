import styled from '@emotion/styled';
import COLORS from '~/constants/colors';
import { mont } from '~/pages/_app';

const Notice = () => {
  return (
    <Block>
      <NoticeBox>
        <Title className={mont.className}>Notice</Title>
        <List>
          <Content>[공지] 개인정보 처리방침 개정에 대해 안내드립니다.(20230822)</Content>
          <NoticeDate>2023-08</NoticeDate>
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
`;

const NoticeBox = styled.div`
  height: 50px;
`;

const Title = styled.h1`
  color: ${COLORS.primary};
  font-size: 13px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
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
