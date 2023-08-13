import styled from '@emotion/styled';

import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...rest }: Props) => {
  return <StyledButton {...rest} />;
};

export default Button;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
