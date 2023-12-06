import FeedCardList from '~/components/feed/FeedCardList';
import FeedTagList from '~/components/feed/FeedTagList';

const FeedPage = () => {
  return (
    <div>
      <FeedTagList />
      <FeedCardList />
    </div>
  );
};

export default FeedPage;
