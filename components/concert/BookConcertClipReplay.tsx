import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import COLORS from '~/constants/colors';

import { _2022_CLIP, _2023_CLIP } from './BookConcertClipReplay.data';

const BookConcertClipReplay = () => {
  return (
    <>
      {/* 2023 */}
      <Block>
        <YearTitle color="g">2023 HOT CLIP REPLAY</YearTitle>
        <Title>
          더 딥하게 파고드는
          <br /> 개발 직무별 이야기
        </Title>
        <Description>
          센스있게 일하는 노하우부터 FIT한 기술 트렌드까지
          <br />
          개발로 성장 부스트 업하는 모든 내용을 확인해보세요
        </Description>

        <ArticleLayout>
          {_2023_CLIP.map((value, index) => (
            <Article key={index}>
              <ReplayTextWrap>
                <ReplayText color="g">REPLAY {index + 1}</ReplayText>
                <ReplayTitle>{value.title}</ReplayTitle>
                {value.session.map((s, index) => (
                  <Fragment key={index}>
                    <ReplaySession>{s.mainTitle}</ReplaySession>
                    <UL>
                      {s.content.map((c, index) => (
                        <Fragment key={index}>
                          <li>{c.middleTitle}</li>
                          {c.subTitle && <li className="sub_title">{c.subTitle}</li>}
                        </Fragment>
                      ))}
                    </UL>
                  </Fragment>
                ))}
              </ReplayTextWrap>

              <Preview>
                <Image src={value.image} alt={value.title} width={264} height={176} />
                <ReplayLink href={value.link} target="_blank" color="g">
                  다시보기
                </ReplayLink>
              </Preview>
            </Article>
          ))}

          <ReplayContinueWrap>
            <ReplayContinueIcon />
            <ReplayContinueText>점핏 개취콘은 계속 됩니다</ReplayContinueText>
          </ReplayContinueWrap>
        </ArticleLayout>
      </Block>

      {/* 2022 */}
      <Block>
        <YearTitle color="b">2022 HOT CLIP REPLAY</YearTitle>
        <Title>
          안보면 불리한 <br className="br_mo" />
          개발자 취업 전략
        </Title>
        <Description>
          코로나 시국 도움받을 선배도 동기도 없어 고민이라면?
          <br />
          선배 개발자에게 배우는 취업 노하우! <br className="br_mo" /> 점핏에서 무료로 확인하세요
        </Description>
        <ArticleLayout>
          {_2022_CLIP.map((value, index) => (
            <Article key={index}>
              <ReplayTextWrap>
                <ReplayText color="b">REPLAY {index + 1}</ReplayText>
                <ReplayTitle>{value.title}</ReplayTitle>
                {value.session.map((s, index) => (
                  <Fragment key={index}>
                    <ReplaySession>{s.mainTitle}</ReplaySession>
                    <UL>
                      {s.content.map((c, index) => (
                        <li key={index}>{c.middleTitle}</li>
                      ))}
                    </UL>
                  </Fragment>
                ))}
              </ReplayTextWrap>

              <Preview>
                <Image src={value.image} alt={value.title} width={264} height={176} />
                <ReplayLink href={value.link} target="_blank" color="b">
                  다시보기
                </ReplayLink>
              </Preview>
            </Article>
          ))}
        </ArticleLayout>
      </Block>
    </>
  );
};

export default BookConcertClipReplay;

const Block = styled.section`
  margin-top: 80px;
  text-align: center;

  .br_mo {
    display: none;
  }

  @media (max-width: 600px) {
    .br_mo {
      display: block;
    }
  }
`;

/**
 * g: green
 * b: blue
 */
const YearTitle = styled.h2<{ color: 'g' | 'b' }>`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.5px;
  color: ${(props) => (props.color === 'g' ? COLORS.primary : '#225cec')};
`;

const Title = styled.h1`
  margin-top: 4px;
  font-weight: bold;
  font-size: 48px;
  line-height: 70px;
  color: #333333;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 46px;
  }
`;

const Description = styled.div`
  margin-top: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.5px;
  color: #333333;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 22px;
    padding: 0 21px;
  }
`;

const ArticleLayout = styled.div`
  width: 880px;
  background-color: #f5f5f8;
  padding: 60px 80px;
  border-radius: 16px;
  margin: 60px auto 0;

  article:not(:first-child) {
    margin-top: 60px;
  }

  @media (max-width: 1080px) {
    width: calc(100% - 200px);
    margin: 34px 100px 0;
    padding: 60px 84px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 32px);
    margin: 34px 16px 0;
    padding: 40px 24px;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: row-reverse;
  gap: 50px;

  @media (max-width: 1080px) {
    display: block;
  }
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1080px) {
    display: block;
    margin: 32px 0 0;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ReplayLink = styled(Link)<{ color: 'g' | 'b' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  border-radius: 100px;
  background-color: ${(props) => (props.color === 'g' ? COLORS.primary : '#225cec')};
  font-weight: bold;
  color: #fff;
  font-size: 15px;
  line-height: 24px;

  @media (max-width: 1080px) {
    margin: 24px auto 0;
    width: 264px;
  }
`;

const ReplayTextWrap = styled.div`
  width: 400px;
  text-align: initial;
  white-space: break-spaces;

  @media (max-width: 1080px) {
    width: 100%;
    text-align: center;
  }
`;

const ReplayText = styled.h3<{ color: 'g' | 'b' }>`
  font-weight: bold;
  font-size: 15px;
  line-height: 21px;
  color: ${(props) => (props.color === 'g' ? COLORS.primary : '#225cec')};
`;

const ReplayTitle = styled.h2`
  margin-top: 4px;
  font-weight: bold;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: -0.5px;
  color: #333333;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 36px;
    white-space: break-spaces;
  }
`;

const ReplaySession = styled.em`
  display: inline-block;
  margin-top: 16px;
  font-weight: 500;
  font-size: 18px;
  color: #333333;
  line-height: 26px;
  letter-spacing: -0.5px;
  font-style: normal;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.5px;
  }
`;

const UL = styled.ul`
  margin-top: 12px;

  li {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #666666;
    white-space: nowrap;
  }

  .sub_title {
    font-weight: 400;
  }

  @media (max-width: 600px) {
    margin-top: 10px;

    li {
      font-size: 14px;
      line-height: 20px;
      white-space: break-spaces;
    }
  }
`;

const ReplayContinueWrap = styled.div`
  margin-top: 56px;
`;

const ReplayContinueIcon = styled.div`
  width: 40px;
  height: 8px;
  background: url('https://cdn.jumpit.co.kr/jumpit/event/book_concert/ellipse_group.svg');
  margin: 0 auto;
`;

const ReplayContinueText = styled.div`
  margin-top: 16px;
  font-size: 24px;
  line-height: 26px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: #a4a4a4;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
