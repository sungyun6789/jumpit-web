import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';

import Button from '../common/Button';

import type { ChangeEvent } from 'react';

import COLORS from '~/constants/colors';

const SearchInput = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <Block>
      <Input placeholder="검색어를 입력해주세요" maxLength={50} type="text" value={searchKeyword} onChange={onChange} />
      <SearchColorIcon>
        <Image width={24} height={24} src="/searchColorIcon.svg" alt="search" />
      </SearchColorIcon>
      {searchKeyword && (
        <DeleteIcon>
          <Image width={24} height={24} src="/deleteIcon.svg" alt="delete" />
        </DeleteIcon>
      )}
    </Block>
  );
};

export default SearchInput;

const Block = styled.div`
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
  font-family: inherit;

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
