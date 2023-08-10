import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  return <Block>{children}</Block>;
};

export default BasicLayout;

const Block = styled.main`
  max-width: 1080px;
  margin: auto;
`;
