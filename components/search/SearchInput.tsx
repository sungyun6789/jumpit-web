import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import COLORS from '~/constants/colors';
import { DesktopView, TabletView } from '~/styles/breakpoint';

import Button from '../common/Button';

import type { ChangeEvent } from 'react';

const SearchInput = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <Block>
        <Input
          placeholder="검색어를 입력해주세요"
          maxLength={50}
          type="text"
          value={searchKeyword}
          onChange={onChange}
        />
        <SearchColorIcon>
          <Image width={24} height={24} src="/search_color_icon.svg" alt="search" />
        </SearchColorIcon>
        {searchKeyword && (
          <DeleteIcon>
            <Image width={24} height={24} src="/delete_icon.svg" alt="delete" />
          </DeleteIcon>
        )}
      </Block>

      <MobileBlock>
        <SearchIcon>
          <Image width={24} height={24} src="/search_icon.svg" alt="search" />
        </SearchIcon>
        <MobileIcon>
          <Image width={24} height={24} src="/menu_icon.svg" alt="menu" />
        </MobileIcon>
      </MobileBlock>
    </>
  );
};

export default SearchInput;

const Block = styled(DesktopView)`
  position: relative;
  width: 520px;
  box-sizing: content-box;
  border: 1.5px solid ${COLORS.primary};
  border-radius: 100px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 100px;
  height: 40px;
  border: none;
  padding: 0px 40px 0px 44px;
  outline: none;

  ::placeholder {
    color: #929292;
  }
`;

const SearchColorIcon = styled(Button)`
  position: absolute;
  top: 8px;
  left: 16px;
`;

const DeleteIcon = styled(Button)`
  position: absolute;
  top: 9px;
  right: 18px;
`;

const MobileBlock = styled(TabletView)`
  @media (max-width: 1080px) {
    display: flex;
    gap: 20px;
  }
`;

const MobileIcon = styled(Button)`
  width: 24px;
  height: 24px;
`;

const SearchIcon = styled(MobileIcon)`
  :hover {
    border-radius: 4px;
    background-color: #f4f4f4;
  }
`;
