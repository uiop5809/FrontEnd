"use client";

import styled from "styled-components";
import { LineChart } from "./LineChart";
import { colors } from "@/styles/theme";
import RadialChart from "./RadialChart";

const TrendPage = async () => {
  return (
    <Layout>
      <ContentWrapper>
        <Title marginBottom={"5.5rem"}>검색량 추이</Title>
        <LineChart />
      </ContentWrapper>
      <ContentWrapper>
        <Title marginBottom={"2rem"}>성별 검색 비중</Title>
        <RadialChart />
      </ContentWrapper>
    </Layout>
  );
};

export default TrendPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 200px;
`;
const ContentWrapper = styled.div`
  padding: 2.5rem 3.125rem;
  border-radius: 1.875rem;
  background: #212121;
`;
const Title = styled.h1<{ marginBottom: string }>`
  color: ${colors.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: ${(props) => props.marginBottom};
`;
