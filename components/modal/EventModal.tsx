import styled from '@emotion/styled';
import Link from 'next/link';
import { useEffect } from 'react';
import Slider from 'react-slick';
import { CDN_PATH } from '~/constants/path';
import { setCookie } from '~/utils/cookie';
import PortalModal from './PortalModal';

/** 마지막 업데이트 23.10.13 */
const EVENTS = [
  {
    link: 'contents/421',
    mobile: CDN_PATH + '/jumpit/event/resume/apply_nudge_m.webp',
    pc: CDN_PATH + '/jumpit/event/resume/apply_nudge_t.webp',
    default: CDN_PATH + '/jumpit/event/resume/apply_nudge.webp',
  },
];

interface Props {
  close: () => void;
}

const EventModal = ({ close }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const todayClose = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    setCookie('hide_event_fit_apply', 'true', date);
    close();
  };

  return (
    <PortalModal>
      <Block>
        <PositionBox>
          <StyledSlider dots dotsClass="dots_custom" arrows={false} initialSlide={1}>
            {EVENTS.map((event) => (
              <Link key={event.link} href={event.link}>
                <picture>
                  <source srcSet={event.mobile} media="(max-width:600px)" />
                  <source srcSet={event.pc} media="(max-width:1080px)" />
                  <img src={event.default} alt="event" width="100%" />
                </picture>
              </Link>
            ))}
          </StyledSlider>

          <ButtonContainer>
            <Button onClick={todayClose}>오늘 하루동안 보지 않기</Button>
            <Button onClick={close}>닫기</Button>
          </ButtonContainer>
        </PositionBox>
      </Block>
    </PortalModal>
  );
};

export default EventModal;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

const PositionBox = styled.div`
  position: relative;
`;

const StyledSlider = styled(Slider)`
  width: 450px;
  height: 450px;

  .dots_custom {
    display: flex !important;
    justify-content: space-around;
    align-items: flex-end;
    width: 19px;
    height: 13px;
    margin: 0 auto;
  }

  .dots_custom li {
    cursor: pointer;
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: #d4d4d4;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 5px;
    width: 5px;
    border-radius: 100%;
  }

  .dots_custom li.slick-active button {
    background-color: #888888;
  }

  @media (max-width: 600px) {
    width: 320px;
    height: 320px;

    .dots_custom {
      height: 12px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  position: absolute;
  bottom: -48px;

  button:not(:last-child)::after {
    display: block;
    content: '';
    position: absolute;
    right: -10px;
    bottom: 4px;
    width: 1px;
    height: 10px;
    background-color: #fff;
  }
`;

const Button = styled.button`
  position: relative;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;
