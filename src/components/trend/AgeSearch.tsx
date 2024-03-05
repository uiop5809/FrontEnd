"use client";

import { styled } from "styled-components";
import Container from "../common/Container";

const AgeSearch = () => {
  return (
    <StyledContainer>
      <TopBox>
        <div>연령별 검색량 TOP 3</div>
        <span>모든 순위 확인하기</span>
      </TopBox>
      <ChartBox></ChartBox>
    </StyledContainer>
  );
};

export default AgeSearch;

const StyledContainer = styled(Container)``;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.grey2};
    cursor: pointer;
  }
`;

const ChartBox = styled.div``;
