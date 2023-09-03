import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import useRepeatedQueryParamKeys from '~/hooks/useRepeatedQueryParamKeys';

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
  const { push } = useRepeatedQueryParamKeys();
  const { query } = useRouter();
  const selectedOption = query.sort ?? 'rsp_rate';

  const onClickOption = (option: OptionType) => {
    push('sort', [option]);
  };

  return (
    <Block>
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
  width: 1060px;
  margin: auto;
  padding: 36px 0 6px 0;
`;

const Option = styled(Button)<{ isSelected: boolean }>`
  color: #222222;
  font-size: 14px;

  ${(props) =>
    props.isSelected && {
      fontWeight: 700,
    }}
`;
