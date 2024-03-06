import { styled } from "styled-components";
import Ranking from "./Ranking";
import Container from "../common/Container";
import { brandRequtation } from "@/lib/trend/trendData";

const BrandReputationIndex = () => {
  return (
    <Container>
      <BrandText>브랜드 평판 지수</BrandText>
      <RankingBox>
        {brandRequtation.map((brand) => (
          <Ranking
            key={brand.id}
            title={brand.title}
            ranking={brand.ranking}
            trend={brand.trend}
            updown={brand.updown}
          />
        ))}
      </RankingBox>
    </Container>
  );
};

export default BrandReputationIndex;

const BrandText = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const RankingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  & > * {
    flex-basis: calc(50% - 0.5rem); // 요소의 초기 크기를 50%로 설정
    margin-bottom: 1rem; // 각 요소의 아래 여백 설정
  }

  & > *:first-child {
    flex-basis: 100%; // 첫 번째 요소의 크기를 100%로 설정
  }
`;
