import PositionLayout from '~/components/layout/PositionLayout';
import PositionSearchList from '~/components/position/PositionSearchList';
import PositionTag from '~/components/position/PositionTag';

const PositionsPage = () => {
  return (
    <>
      <PositionTag title="직무 탐색" />
      <PositionLayout>
        <PositionSearchList />
      </PositionLayout>
    </>
  );
};

export default PositionsPage;
