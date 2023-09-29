import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const JobInterviewScrollTopButton = () => {
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
      <Button onClick={onClick}>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="\uD3EC\uC9C0\uC158\uD0D0\uC0C9-copy" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              id="PC\uAC1C\uC778_2_\uAC80\uC0C9_2\uACBD\uB825\uB808\uC774\uC5B4"
              transform="translate(-1540.000000, -990.000000)"
            >
              <g id="btn/ico/top/default/h40" transform="translate(1530.000000, 980.000000)">
                <g
                  id="ico/top/h40"
                  transform="translate(30.000000, 30.000000) rotate(-90.000000) translate(-30.000000, -30.000000) translate(10.000000, 10.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
                  <path
                    d="M33.5,12.5 L33.5,27.5 M17,27.5 L24.5,20 L17,12.5 M23.7,20 L6.5,20"
                    id="Shape"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Button>
    </Block>
  );
};

export default JobInterviewScrollTopButton;

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

const Button = styled.button`
  position: absolute;
  bottom: 40px;
  right: -110px;
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
