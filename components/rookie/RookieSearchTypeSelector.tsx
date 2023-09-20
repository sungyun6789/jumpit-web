import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { RookieCodeInitializeContext } from '~/pages/rookie/position';

type SortType = 'rsp_rate' | 'reg_dt' | 'popular';

const SORT_TYPE: Record<SortType, string> = {
  rsp_rate: '응답률순',
  reg_dt: '최신순',
  popular: '인기순',
};

/**
 * @todo select 기능 구현
 */
const RookieSearchTypeSelector = () => {
  const { pathname, query, push } = useRouter();
  const [isSortTypeSelected, setIsSortTypeSelected] = useState(false);
  const data = useContext(RookieCodeInitializeContext);
  const selectedSortType = query.sort ? (query.sort as SortType) : 'rsp_rate';

  const onClickSortType = (type: SortType) => {
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
      <SearchLayout>
        <SelectLayout>
          <Select>
            기술스택
            <Image src="/bottomArrow.svg" width={16} height={16} alt="more" />
          </Select>
          <Select>
            직무 <Image src="/bottomArrow.svg" width={16} height={16} alt="more" />
          </Select>
          <Select>
            경력 <Image src="/bottomArrow.svg" width={16} height={16} alt="more" />
          </Select>
          <Select>
            지역 <Image src="/bottomArrow.svg" width={16} height={16} alt="more" />
          </Select>
        </SelectLayout>

        <SelectedSortTypeLayout>
          <QuestionMark />

          <SelecredSortType
            onClick={() => !isSortTypeSelected && setIsSortTypeSelected(true)}
            onBlur={() => setIsSortTypeSelected(false)}
          >
            {SORT_TYPE[selectedSortType]} <Image src="/bottomArrow.svg" width={16} height={16} alt="more" />
            {isSortTypeSelected && (
              <SortTypeSelector>
                {data?.sort.map((value) => (
                  <SortTypeSelectorOption key={value.id} onClick={() => onClickSortType(value.id)}>
                    {value.name}
                  </SortTypeSelectorOption>
                ))}
              </SortTypeSelector>
            )}
          </SelecredSortType>
        </SelectedSortTypeLayout>
      </SearchLayout>
    </Block>
  );
};

export default RookieSearchTypeSelector;

const Block = styled.section`
  background-color: #fbfbfd;
  padding-top: 40px;
`;

const SearchLayout = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 0 6px;
`;

const SelectLayout = styled.div`
  display: flex;
  gap: 8px;
`;

const Select = styled.button`
  display: flex;
  gap: 1px;
  align-items: center;
  background-color: #fff;
  padding: 6px 14px 7px 12px;
  border: 1px solid #e4e4e4;
  border-radius: 100px;
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #222;
  font-family: inherit;
  cursor: pointer;

  :hover {
    border: 1px solid #000;
  }
`;

const SelectedSortTypeLayout = styled.div`
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

const SelecredSortType = styled.button`
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
  font-family: inherit;
  cursor: pointer;
`;

const SortTypeSelector = styled.ul`
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

const SortTypeSelectorOption = styled.li`
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
