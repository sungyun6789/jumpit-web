import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

interface Props {
  right: number;
}

const ScrollTopButton = ({ right }: Props) => {
  const [isView, setIsView] = useState(false);

  const onClick = () => scrollTo(0, 0);

  const onScroll = () => {
    if (scrollY > 550) {
      return setIsView(true);
    }
    return setIsView(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Block isView={isView}>
      <Button onClick={onClick} right={right}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
          <g fill="none" fillRule="evenodd">
            <path d="M0 40V0h40v40z"></path>
            <path stroke="#FFF" strokeWidth="2" d="M12.5 6.5h15m0 16.5L20 15.5 12.5 23m7.5-6.7v17.2"></path>
          </g>
        </svg>
      </Button>
    </Block>
  );
};

export default ScrollTopButton;

const Block = styled.div<{ isView: boolean }>`
  display: ${(props) => (props.isView ? 'block' : 'none')};
  position: fixed;
  width: 1060px;
  left: 50%;
  margin-left: -530px;
  bottom: 0;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const Button = styled.button<{ right: number }>`
  position: absolute;
  bottom: 40px;
  right: ${(props) => props.right}px;
  width: 60px;
  height: 60px;
  background-color: #000;
  opacity: 0.4;
  border-radius: 60px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: unset;
  }
`;
