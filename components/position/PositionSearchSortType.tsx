import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import usePositionQueryPush from '~/hooks/usePositionQueryPush';

import Button from '../common/Button';

type OptionType = 'rsp_rate' | 'reg_dt' | 'popular';

interface SearchTypeOptionModel {
  label: string;
  value: OptionType;
}

const SEARCH_TYPE_OPTIONS: SearchTypeOptionModel[] = [
  { label: '응답률순', value: 'rsp_rate' },
  { label: '최신순', value: 'reg_dt' },
  { label: '인기순', value: 'popular' },
];

const PositionSearchSortType = () => {
  const { query } = useRouter();
  const { push } = usePositionQueryPush();
  const selectedOption = query.sort ?? 'rsp_rate';

  const onClickOption = (option: OptionType) => {
    push('sort', [option]);
  };

  return (
    <Block>
      {/** @todo 모바일인 경우 도움말 추가 */}
      {SEARCH_TYPE_OPTIONS.map((option) => (
        <Option
          key={option.label}
          isSelected={option.value === selectedOption}
          onClick={() => onClickOption(option.value)}
        >
          {option.label}
        </Option>
      ))}
    </Block>
  );
};

export default PositionSearchSortType;

const Block = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  max-width: 1060px;
  margin: auto;
  padding: 36px 0 6px 0;

  @media (max-width: 1080px) {
    padding: 24px 16px 6px;
  }

  @media (max-width: 600px) {
    position: relative;
    margin-top: 8px;
    right: 5px;
  }
`;

const Option = styled(Button)<{ isSelected: boolean }>`
  height: 20px;
  color: #666666;
  font-size: 14px;

  ${(props) =>
    props.isSelected && {
      color: '#222222',
      fontWeight: 700,
    }}
`;
