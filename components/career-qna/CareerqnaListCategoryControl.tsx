import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import COLORS from '~/constants/colors';

const OPTIONS = ['💻 전체', '💼 커리어', '👔 취업', '🚀 기술스택'];

const CareerqnaListCategoryControl = () => {
  const router = useRouter();
  const category = Number(router.query.category ?? 1);

  const onClick = (value: number) => {
    return router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        category: value + 1,
      },
    });
  };

  return (
    <Block>
      <Question>
        <Button>질문하기</Button>
      </Question>

      <OptionList>
        {OPTIONS.map((option, index) => (
          <Option key={option} isSelected={index + 1 == category} onClick={() => onClick(index)}>
            {option}
          </Option>
        ))}
      </OptionList>
    </Block>
  );
};

export default CareerqnaListCategoryControl;

const Block = styled.section`
  width: 240px;
  height: fit-content;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 36px;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 16px;
    background-color: transparent;
    box-shadow: none;
  }
`;

const Question = styled.div`
  padding: 24px 24px 20px;
  border-bottom: 1px solid #f2f2f5;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 0 16px;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  height: 48px;
  border-radius: 8px;
  color: #fff;
  width: 100%;
  background-color: ${COLORS.primary};
  outline: none;

  :hover {
    background-color: #01c662;
  }
`;

const OptionList = styled.ul`
  padding: 14px 0;

  @media (max-width: 1080px) {
    padding: 0 0 13px;
    display: flex;
    border-bottom: 1px solid #d4d4d4;
  }
`;

const Option = styled.li<{ isSelected: boolean }>`
  padding: 10px 24px;
  font-size: 15px;
  line-height: 24px;
  cursor: pointer;
  font-weight: ${(props) => props.isSelected && '700'};

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 1080px) {
    padding: 0;
    margin-right: 24px;
  }
`;
