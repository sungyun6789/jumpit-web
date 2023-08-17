import styled from '@emotion/styled';

const MiniBanner = () => {
  return <Block />;
};

export default MiniBanner;

const Block = styled.div`
  position: absolute;
  top: 160px;
  left: 50%;
  width: 100px;
  height: 148px;
  margin-left: 549px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;

  @media (max-width: 1080px) {
    display: none;
  }
`;
