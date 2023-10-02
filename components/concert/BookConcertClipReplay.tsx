import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import COLORS from '~/constants/colors';
import { CDN_PATH } from '~/constants/path';

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
          <Article>
            <Preview>
              <Image
                src={CDN_PATH + '/jumpit/event/developer_concert/img_replay_01.webp'}
                alt="JUMPIT TO FRONT-END"
                width={264}
                height={176}
              />
              <ReplayLink href="https://www.youtube.com/watch?v=pN0O1AqZYYA" target="_blank" color="g">
                다시보기
              </ReplayLink>
            </Preview>

            <ReplayTextWrap>
              <ReplayText color="g">REPLAY 1</ReplayText>
              <ReplayTitle>JUMPIT TO FRONT-END</ReplayTitle>
              <ReplaySession>센스있게 일하는 FE 개발자 되기</ReplaySession>
              <UL>
                <li>• ‘FE개발의 소프트 스킬과 하드스킬’ 강연자 김태곤</li>
                <li>• ‘협업?! 이렇게 한번 해봐’ 강연자 유동균</li>
                <li className="sub_title">- FE개발자가 타 직군과 대화를 잘해야하는 이유</li>
              </UL>

              <ReplaySession>FIT한 정보로 성장 부스트업</ReplaySession>
              <UL>
                <li>• ‘FE개발 트렌드’ 강연자 이인제[소플]</li>
                <li className="sub_title">- 리액트 개발 생태계와 Next.js까지</li>
                <li>• ‘타입스크립트로 FE개발 레벨업’ 강연자 장기효[캡틴판교]</li>
              </UL>
            </ReplayTextWrap>
          </Article>

          <Article>
            <Preview>
              <Image
                src={CDN_PATH + '/jumpit/event/developer_concert/img_replay_be.webp'}
                alt="JUMPIT TO BACK-END"
                width={264}
                height={176}
              />
              <ReplayLink href="https://www.youtube.com/watch?v=qI4zF0GfEW0" target="_blank" color="g">
                다시보기
              </ReplayLink>
            </Preview>

            <ReplayTextWrap>
              <ReplayText color="g">REPLAY 2</ReplayText>
              <ReplayTitle>JUMPIT TO BACK-END</ReplayTitle>
              <ReplaySession>센스있게 일하는 BE 개발자 되기</ReplaySession>
              <UL>
                <li>• ‘중요한 건 인터페이스야’ 강연자 손진규</li>
                <li>• ‘토스뱅크 기업문화와 성장하는 주니어 BE특징’ 강연자 박준하</li>
              </UL>

              <ReplaySession>FIT한 정보로 성장 부스트업</ReplaySession>
              <UL>
                <li>• ‘알아두면 쓸 데 있는 코틀린’ 강연자 박용권</li>
                <li>• ‘컨테이너 인프라의 필요 배경, 왜 지금 배워야 하는가?’ 강연자 심근우</li>
              </UL>
            </ReplayTextWrap>
          </Article>

          <ReplayContinueWrap>
            <ReplayContinueIcon />
            <ReplayContinueText>점핏 개취콘은 계속 됩니다</ReplayContinueText>
          </ReplayContinueWrap>
        </ArticleLayout>
      </Block>

      {/* 2022 */}
      <Block>
        <YearTitle color="b">2022 HOT CLIP REPLAY</YearTitle>
        <Title>안보면 불리한 개발자 취업 전략</Title>
        <Description>
          코로나 시국 도움받을 선배도 동기도 없어 고민이라면?
          <br />
          선배 개발자에게 배우는 취업 노하우! 점핏에서 무료로 확인하세요
        </Description>
        <ArticleLayout>
          <Article>
            <Preview>
              <Image
                src={CDN_PATH + '/jumpit/event/book_concert/img_replay_01.png'}
                alt="신입 개발자로 살아남는 방책"
                width={264}
                height={176}
              />
              <ReplayLink href="https://www.youtube.com/watch?v=9M8ScqQvEzo" target="_blank" color="b">
                다시보기
              </ReplayLink>
            </Preview>

            <ReplayTextWrap>
              <ReplayText color="b">REPLAY 1</ReplayText>
              <ReplayTitle>신입 개발자로 살아남는 방책</ReplayTitle>
              <ReplaySession>
                개발자 취업을 위한 단계별 준비 방법과 현업에서 생각하는 신입 개발자 선발 포인트
              </ReplaySession>
              <UL>
                <li>- ‘누가 IT 시장 취업에 성공하는가’ 저자 이상민</li>
                <li>- ‘사람인HR IT 연구소’ 소장 남광현</li>
              </UL>
            </ReplayTextWrap>
          </Article>

          <Article>
            <Preview>
              <Image
                src={CDN_PATH + '/jumpit/event/book_concert/img_replay_02.png'}
                alt="신입 개발자의 커리어 방향성"
                width={264}
                height={176}
              />
              <ReplayLink href="https://www.youtube.com/watch?v=BsgyzcfrUwQ" target="_blank" color="b">
                다시보기
              </ReplayLink>
            </Preview>

            <ReplayTextWrap>
              <ReplayText color="b">REPLAY 2</ReplayText>
              <ReplayTitle>신입 개발자의 커리어 방향성</ReplayTitle>
              <ReplaySession>
                개발자로서 슬럼프에 빠져, 가야 할 길을 잃고 어떻게 성장 맵을 그려나가야 할지 막막하다면?
              </ReplaySession>
              <UL>
                <li>- ‘개발자 오디세이’ 저자 이경종</li>
              </UL>
            </ReplayTextWrap>
          </Article>

          <Article>
            <Preview>
              <Image
                src={CDN_PATH + '/jumpit/event/book_concert/img_replay_03.png'}
                alt="전공자, 개발자 취업 A to Z"
                width={264}
                height={176}
              />
              <ReplayLink href="https://www.youtube.com/watch?v=0NWVDO1Lmx4" target="_blank" color="b">
                다시보기
              </ReplayLink>
            </Preview>

            <ReplayTextWrap>
              <ReplayText color="b">REPLAY 3</ReplayText>
              <ReplayTitle>전공자, 개발자 취업 A to Z</ReplayTitle>
              <ReplaySession>
                전공자의 강점을 더 강화해 개발자로 취업하는 방법 밸런스 게임으로 알아보는 신입 개발자 채용의 모든 것
              </ReplaySession>
              <UL>
                <li>- ‘클린코드, 이제는 파이썬이다’ 역자 박재호</li>
                <li>- 기업과 함께하는 소통 시간 : 팀오투, 클로봇, 아드리엘</li>
              </UL>
            </ReplayTextWrap>
          </Article>

          <Article>
            <Preview>
              <Image
                src={CDN_PATH + '/jumpit/event/book_concert/img_replay_04.png'}
                alt="비전공자, 개발자 취업 A to Z"
                width={264}
                height={176}
              />
              <ReplayLink href="https://www.youtube.com/watch?v=PIVuvB-xoPc&feature=youtu.be" target="_blank" color="b">
                다시보기
              </ReplayLink>
            </Preview>

            <ReplayTextWrap>
              <ReplayText color="b">REPLAY 4</ReplayText>
              <ReplayTitle>비전공자, 개발자 취업 A to Z</ReplayTitle>
              <ReplaySession>
                비전공자가 가지는 개발자 취업의 장점 비전공 신입 개발자가 취업 시 고려해야 할 중요 포인트
              </ReplaySession>
              <UL>
                <li>- ‘Node.JS 교과서’ ‘Let’s Get IT 자바스크립트 프로그래밍’ 저자 조현영</li>
              </UL>
            </ReplayTextWrap>
          </Article>

          <Article>
            <Preview>
              <Image
                src={CDN_PATH + '/jumpit/event/book_concert/img_replay_05.png'}
                alt="취준생을 위한 개발 분야 총 정리"
                width={264}
                height={176}
              />
              <ReplayLink
                href="https://www.youtube.com/watch?v=EDWMLCNU78w&feature=youtu.bes"
                target="_blank"
                color="b"
              >
                다시보기
              </ReplayLink>
            </Preview>

            <ReplayTextWrap>
              <ReplayText color="b">REPLAY 5</ReplayText>
              <ReplayTitle>취준생을 위한 개발 분야 총 정리</ReplayTitle>
              <ReplaySession>
                IT분야 1위 유튜버 [조코딩]이 설명하는! 광범위한 개발 취업분야를 한 번에 이해하고 싶은 개발 취준생이 꼭
                들어야 할 모든 것
              </ReplaySession>
              <UL>
                <li>- ‘Do it! 조코딩의 프로그래밍 입문’ 저자 조코딩(조동근)</li>
              </UL>
            </ReplayTextWrap>
          </Article>
        </ArticleLayout>
      </Block>
    </>
  );
};

export default BookConcertClipReplay;

const Block = styled.section`
  margin-top: 80px;
  text-align: center;
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
`;

const Description = styled.div`
  margin-top: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.5px;
  color: #333333;
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
`;

const Article = styled.article`
  display: flex;
  gap: 50px;
  justify-content: flex-end;
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
`;

const ReplayTextWrap = styled.div`
  width: 400px;
  text-align: initial;
  white-space: break-spaces;
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
`;
