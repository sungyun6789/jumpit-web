import styled from '@emotion/styled';

const BookConcertBanner = () => {
  return (
    <Block>
      <figure>
        <picture>
          <source
            media="(max-width:600px)"
            srcSet="https://cdn.jumpit.co.kr/jumpit/event/developer_concert/top_m.webp"
          />
          <source
            media="(max-width:1080px)"
            srcSet="https://cdn.jumpit.co.kr/jumpit/event/developer_concert/top_t.webp"
          />
          <Img src="https://cdn.jumpit.co.kr/jumpit/event/developer_concert/top.webp" alt="" />
        </picture>
      </figure>
    </Block>
  );
};

export default BookConcertBanner;

const Block = styled.section`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;
