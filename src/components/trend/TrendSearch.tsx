import styled from "styled-components";
import RecentSearchContent from "./RecentSearchContent";
import Image from "next/image";

const recentSearchData = [
  {
    id: 1,
    name: "이민정",
  },
  {
    id: 2,
    name: "나인우",
  },
  {
    id: 3,
    name: "부승관",
  },
  {
    id: 4,
    name: "이민정",
  },
];

const TrendSearch = () => {
  return (
    <Layout>
      <SubTitle>트렌드 분석</SubTitle>
      <ImageBox>
        <Image
          src="/trend/peopleAnalysis.svg"
          alt="peopleAnalysis"
          width={200}
          height={200}
        />
      </ImageBox>
      <Title>인물 분석</Title>

      <Description>
        검색량과 연관어 추이, 브랜드 평판 지수를 통해 인물에 대한 정보를 한 번에
        확인할 수 있어요.
      </Description>

      <SearchBarBox>
        <SearchImage>
          <Image src="/common/search.svg" alt="search" width={20} height={20} />
        </SearchImage>
        <SearchBar placeholder="예) 유재석, 라이즈, 최민식" />
      </SearchBarBox>

      <RecentSearchBox>
        {recentSearchData.map((recentSearch) => (
          <RecentSearchContent key={recentSearch.id} name={recentSearch.name} />
        ))}
      </RecentSearchBox>
    </Layout>
  );
};

export default TrendSearch;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 70%;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  color: #b4b4b4;
  transform: translateY(4rem);
`;

const ImageBox = styled.div`
  transform: translateY(3rem);
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const SearchBarBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const SearchImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchBar = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 100%;
  background: #313131;
  padding: 1.3rem 5rem;
  outline: none;
  border-radius: 100px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

const RecentSearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 1rem;
`;
