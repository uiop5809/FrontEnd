import { colors } from "@/styles/theme";
import styled from "styled-components";

const BarChart = () => {
  const data = [
    {
      category: "40대",
      ratio: 20,
    },
    {
      category: "50대",
      ratio: 16.2,
    },
    {
      category: "60대",
      ratio: 12.5,
    },
  ];
  const ratioSum = data[0].ratio + data[1].ratio + data[2].ratio;
  return (
    <>
      <Label>{`${data[0].category} ${data[0].ratio}%`}</Label>
      <ChartWrapper>
        <BarWrapper>
          <Ratio>{`${data[0].ratio}%`}</Ratio>
          <Bar
            height={`${(data[0].ratio / ratioSum) * 500}px`}
            color={colors.main}
          />
          <Legend weight={700}>{`${data[0].category}`}</Legend>
        </BarWrapper>
        <BarWrapper>
          <Ratio>{`${data[1].ratio}%`}</Ratio>
          <Bar
            height={`${(data[1].ratio / ratioSum) * 500}px`}
            color={colors.grey05}
          />
          <Legend weight={500}>{`${data[1].category}`}</Legend>
        </BarWrapper>
        <BarWrapper>
          <Ratio>{`${data[2].ratio}%`}</Ratio>
          <Bar
            height={`${(data[2].ratio / ratioSum) * 500}px`}
            color={colors.grey05}
          />
          <Legend weight={500}>{`${data[2].category}`}</Legend>
        </BarWrapper>
      </ChartWrapper>
    </>
  );
};

export default BarChart;

const Label = styled.div`
  color: ${colors.grey5};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 0.78rem;
`;
const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
  justify-content: end;
  align-items: center;
`;
const Bar = styled.div<{ height: string; color: string }>`
  width: 3.75rem;
  height: ${(props) => props.height};
  border-radius: 2.5rem 2.5rem 0.625rem 0.625rem;
  background: ${(props) => props.color};
`;
const Ratio = styled.div`
  color: ${colors.grey4};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Legend = styled.div<{ weight: number }>`
  color: ${colors.grey4};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
`;
const ChartWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  gap: 2.25rem;
  margin-top: 1.5rem;
`;
