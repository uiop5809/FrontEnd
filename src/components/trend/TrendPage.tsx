"use client";

import { styled } from "styled-components";
import AgeSearch from "./AgeSearch";
import BrandReputationIndex from "./BrandReputationIndex";
import RelatedHashTag from "./RelatedHashTag";

const TrendPage = () => {
  return (
    <Layout>
      <SecondBox>
        <AgeSearch />
        <AgeSearch />
        <BrandReputationIndex />
      </SecondBox>
      <RelatedHashTag />
    </Layout>
  );
};

export default TrendPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 10rem auto 0 auto; // 임시로
`;

const SecondBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
