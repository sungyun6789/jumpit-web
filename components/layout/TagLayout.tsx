import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const TagLayout = ({ children }: Props) => {
  return <Block>{children}</Block>;
};

export default TagLayout;

const Block = styled.section`
  max-width: 1060px;
  margin: 32px auto 50px;

  @media (max-width: 1080px) {
    margin: 32px auto 30px 16px;
  }
`;
