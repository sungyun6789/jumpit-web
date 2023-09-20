import styled from '@emotion/styled';
import Image from 'next/image';

import RookieSearchListSortSelect from './RookieSearchListSortSelect';

/**
 * @todo select 기능 구현 및 컴포넌트 분리
 */
const RookieSearchTypeSelector = () => {
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

        <RookieSearchListSortSelect />
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
