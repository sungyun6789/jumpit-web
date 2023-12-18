import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const OPTIONS = [
  { label: '최신순', value: 'reg_dt' },
  { label: '공감순', value: 'like' },
  { label: '조회순', value: 'view' },
];

const CareerqnaListOrderControl = () => {
  const router = useRouter();
  const order = router.query.sort ?? 'reg_dt';

  const onClick = (value: string) => {
    return router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        sort: value,
      },
    });
  };

  return (
    <Block>
      {OPTIONS.map((option) => (
        <Label key={option.value} isSelected={order === option.value} onClick={() => onClick(option.value)}>
          {option.label}
        </Label>
      ))}
    </Block>
  );
};

export default CareerqnaListOrderControl;

const Block = styled.ul`
  display: flex;
  gap: 20px;

  @media (max-width: 1080px) {
    padding: 24px 0 0;
  }
`;

const Label = styled.li<{ isSelected: boolean }>`
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? '#000' : '#999')};
  font-weight: ${(props) => props.isSelected && '700'};
`;
