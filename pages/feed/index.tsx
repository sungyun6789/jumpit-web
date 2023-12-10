import Head from 'next/head';
import ScrollTopButton from '~/components/common/ScrollTopButton';
import FeedCardList from '~/components/feed/FeedCardList';
import FeedTagList from '~/components/feed/FeedTagList';

const FeedPage = () => {
  return (
    <div>
      <Head>
        <title>점핏 | 꿀 피드</title>
      </Head>
      <FeedTagList />
      <FeedCardList />
      <ScrollTopButton right={-80} />
    </div>
  );
};

export default FeedPage;
