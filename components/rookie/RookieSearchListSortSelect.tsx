import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { RookieCodeInitializeContext } from '~/context/RookieCodeInitializeProvider';

type SortType = 'rsp_rate' | 'reg_dt' | 'popular';

const SORT_TYPE: Record<SortType, string> = {
  rsp_rate: '응답률순',
  reg_dt: '최신순',
  popular: '인기순',
};

const RookieSearchListSortSelect = () => {
  const { pathname, query, push } = useRouter();
  const [isSortTypeSelected, setIsSortTypeSelected] = useState(false);
  const data = useContext(RookieCodeInitializeContext);
  const selectedSortType = query.sort ? (query.sort as SortType) : 'rsp_rate';

  const onClick = () => {
    if (isSortTypeSelected === true) {
      return close();
    }

    // 옵션을 선택하는 경우도 <SelecredSortType /> 가 클릭되는 것이기 때문에 조건을 설정하지 않을 경우 계속 열림
    if (isSortTypeSelected === false) {
      return setIsSortTypeSelected(true);
    }
  };

  const close = () => {
    setIsSortTypeSelected(false);
  };

  const onClickOption = (type: SortType) => {
    push({
      pathname,
      query: {
        ...query,
        sort: type,
      },
    });
    setIsSortTypeSelected(false);
  };

  return (
    <Block>
      <QuestionMark />

      <Button onClick={onClick} onBlur={close}>
        {SORT_TYPE[selectedSortType]} <Image src="/bottomArrow.svg" width={16} height={16} alt="more" />
        {isSortTypeSelected && (
          <Select>
            {data?.sort.map((value) => (
              <Option key={value.id} onClick={() => onClickOption(value.id)}>
                {value.name}
              </Option>
            ))}
          </Select>
        )}
      </Button>
    </Block>
  );
};

export default RookieSearchListSortSelect;

const Block = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  margin-left: 5px;
`;

const QuestionMark = styled.div`
  box-sizing: content-box;
  width: 14px;
  height: 14px;
  border: 1px solid #c4c4c4;
  border-radius: 14px;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  line-height: 14px;
  color: #c4c4c4;

  ::before {
    content: '?';
  }
`;

const Button = styled.button`
  margin-right: 10px;
  display: flex;
  gap: 2px;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #666666;
  padding: 6px 14px 6px 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Select = styled.ul`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 16px;
  background-color: #fff;
  position: absolute;
  top: 44px;
  right: 9px;
  left: unset;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  width: 120px;
  z-index: 5;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #222;
  padding-left: 24px;
  cursor: pointer;

  :hover {
    background-color: #fafafa;

    :first-of-type {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    :last-of-type {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
`;
