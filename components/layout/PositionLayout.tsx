import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const PositionLayout = ({ children }: Props) => {
  return <Block>{children}</Block>;
};

export default PositionLayout;

const Block = styled.div`
  background-color: #f7f7f7;
  padding: 40px 0 80px 0;

  @media (max-width: 1080px) {
    padding: 0;
  }
`;
