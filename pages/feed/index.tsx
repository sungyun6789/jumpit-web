import ScrollTopButton from '~/components/common/ScrollTopButton';
import FeedCardList from '~/components/feed/FeedCardList';
import FeedTagList from '~/components/feed/FeedTagList';

const FeedPage = () => {
  return (
    <div>
      <FeedTagList />
      <FeedCardList />
      <ScrollTopButton right={-80} />
    </div>
  );
};

export default FeedPage;
