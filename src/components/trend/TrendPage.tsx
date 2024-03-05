"use client";

import { styled } from "styled-components";
import AgeSearch from "./AgeSearch";
import BrandReputationIndex from "./BrandReputationIndex";

const TrendPage = () => {
  return (
    <Layout>
      <SecondBox>
        <AgeSearch />
        <AgeSearch />
        <BrandReputationIndex />
      </SecondBox>
    </Layout>
  );
};

export default TrendPage;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const SecondBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
