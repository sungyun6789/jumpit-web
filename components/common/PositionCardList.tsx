import styled from '@emotion/styled';

interface Props {
  data: any[];
}

const PositionCardList = ({ data }: Props) => {
  return (
    <Block>
      {data.map((value) => (
        <Item key={value}>
          <Banner />
          <DescriptionBox>
            <CompanyName>회사 이름 {value}</CompanyName>
            <PositionTitle>공고 제목 {value}</PositionTitle>
            <TechStackBox>
              <Description>기술 스택 {value}</Description>
            </TechStackBox>
            <LocationCareerBox>
              <Description>지역</Description>
              <Description>경력</Description>
            </LocationCareerBox>
          </DescriptionBox>
        </Item>
      ))}
    </Block>
  );
};

export default PositionCardList;

const Block = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  margin: auto;
`;

const Item = styled.div`
  width: calc(25% -20px);
  flex: 1 1 22%;
  max-width: 270px;
  padding: 10px;
  cursor: pointer;

  :hover {
    h2 {
      text-decoration: underline;
    }
  }
`;

const Banner = styled.div`
  box-sizing: content-box;
  width: 250px;
  height: 166px;
  border: 1px solid #0000001a;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

const DescriptionBox = styled.div`
  padding: 12px 0px 36px;
  width: calc(100% - 7px);
`;

const CompanyName = styled.span`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #444444;
`;

const PositionTitle = styled.h2`
  margin-top: 6px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.4em;
`;

const Description = styled.span`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #999999;
`;

const TechStackBox = styled.div`
  margin-top: 8px;
`;

const LocationCareerBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 4px;
`;
