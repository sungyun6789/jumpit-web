import PositionSearchList from '~/components/position/PositionSearchList';
import PositionTag from '~/components/position/PositionTag';

const PositionsPage = () => {
  return (
    <>
      <PositionTag title="직무 탐색" />
      <PositionSearchList />
    </>
  );
};

export default PositionsPage;
