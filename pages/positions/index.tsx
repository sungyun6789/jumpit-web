import PositionLayout from '~/components/layout/PositionLayout';
import PositionSearchDetailTag from '~/components/position/PositionSearchDetailTag';
import PositionSearchSortType from '~/components/position/PositionSearchSortType';
import PositionTag from '~/components/position/PositionTag';

const PositionsPage = () => {
  return (
    <>
      <PositionTag title="직무 탐색" />
      <PositionLayout>
        <PositionSearchDetailTag />
        <PositionSearchSortType />
      </PositionLayout>
    </>
  );
};

export default PositionsPage;
