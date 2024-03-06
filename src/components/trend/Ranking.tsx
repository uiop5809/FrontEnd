import { styled } from "styled-components";

interface RankingProps {
  title: string;
  ranking?: number;
  trend?: number;
  updown?: boolean;
}

const Ranking = (props: RankingProps) => {
  const { title, ranking, trend, updown } = props;

  return (
    <Layout>
      <Button ranking={ranking}>{title}</Button>
      {ranking ? (
        <>
          <Rank ranking={ranking}>{ranking}위</Rank>
          <Trend updown={updown}>
            {trend}% {updown ? <span>▲</span> : <span>▼</span>}
          </Trend>
        </>
      ) : (
        <Blank>-</Blank>
      )}
    </Layout>
  );
};

export default Ranking;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
`;

const Button = styled.button<{ ranking?: number }>`
  background: transparent;
  border-radius: 100px;
  border: 1px solid ${({ ranking, theme }) =>
  ranking ? theme.colors.grey3 : theme.colors.grey1};
  color: ${({ ranking, theme }) =>
    ranking ? theme.colors.grey3 : theme.colors.grey1};
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 400;
`;

const Rank = styled.div<{ ranking?: number }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ ranking, theme }) =>
    ranking === 1 ? theme.colors.main : theme.colors.white};
`;

const Trend = styled.div<{ updown?: boolean }>`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey1};
  span {
    color: ${({ updown, theme }) =>
      updown ? theme.colors.main : theme.colors.secondary};
    margin-left: 0.2rem;
  }
`;

const Blank = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.grey3};
  font-weight: 800;
  margin-top: 2rem;
`;
