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
  return (
    <>
      <Label>{`${data[0].category} ${data[0].ratio}%`}</Label>
      <BarWrapper>
        <Bar height={"20px"} />
        <Label>{`${data[0].category}`}</Label>
      </BarWrapper>
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
const BarWrapper = styled.div``;
const Bar = styled.div<{ height: string }>`
  width: 3.75rem;
  height: ${(props) => props.height};
`;
