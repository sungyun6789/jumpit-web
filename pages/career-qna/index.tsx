import styled from '@emotion/styled';
import Head from 'next/head';
import CareerqnaBanner from '~/components/career-qna/CareerqnaBanner';
import CareerqnaList from '~/components/career-qna/CareerqnaList';
import CareerqnaListCategoryControl from '~/components/career-qna/CareerqnaListCategoryControl';
import CareerqnaListOrderControl from '~/components/career-qna/CareerqnaListOrderControl';

const CareerQnAPage = () => {
  return (
    <>
      <Head>
        <title>점핏 | 취업 Q&A</title>
      </Head>
      <CareerqnaBanner />
      <Block>
        <Content>
          <CareerqnaListCategoryControl />
          <div>
            <CareerqnaListOrderControl />
            <CareerqnaList />
          </div>
        </Content>
      </Block>
    </>
  );
};

export default CareerQnAPage;

const Block = styled.section`
  padding: 158px 0 176px;
  background-color: #f5f5f8;
`;

const Content = styled.div`
  width: 1060px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
