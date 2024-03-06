"use client";

import { styled } from "styled-components";
import AgeSearch from "./AgeSearch";
import BrandReputationIndex from "./BrandReputationIndex";
import RelatedHashTag from "./RelatedHashTag";
import TrendSearch from "./TrendSearch";
import RelatedContents from "./RelatedContents";

const TrendPage = () => {
  return (
    <Layout>
      <TrendSearch />
      <SecondBox>
        <AgeSearch />
        <AgeSearch />
        <BrandReputationIndex />
      </SecondBox>
      <RelatedHashTag />
      <RelatedContents />
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
  margin: 6rem auto 0 auto; // 임시로
`;

const SecondBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
