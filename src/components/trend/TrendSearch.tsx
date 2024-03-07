"use client";

import styled from "styled-components";
import RecentSearchContent from "./RecentSearchContent";
import Image from "next/image";
import { recentSearchData } from "@/lib/trend/trendData";
import { useState } from "react";

interface TrendPeopleSearchProps {
  title: string;
  description: string;
  placeholder: string;
  src: string;
  setSearchName: (name: string) => void;
}

const TrendSearch = (props: TrendPeopleSearchProps) => {
  const [name, setName] = useState("");
  const { title, description, placeholder, src, setSearchName } = props;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchName(name);
      setName("");
    }
  };

  return (
    <Layout>
      <SubTitle>트렌드 분석</SubTitle>
      <ImageBox>
        <Image src={src} alt="peopleAnalysis" width={200} height={200} />
      </ImageBox>
      <Title>{title} 분석</Title>

      <Description>{description}</Description>

      <SearchBarBox>
        <SearchImage>
          <Image src="/common/search.svg" alt="search" width={20} height={20} />
        </SearchImage>
        <SearchBar
          placeholder={placeholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
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
  width: 50%;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  color: #b4b4b4;
  transform: translateY(5rem);
`;

const ImageBox = styled.div`
  transform: translateY(3rem);
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.div`
  font-size: 1rem;
  margin: 1.5rem 0 4rem 0;
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
  top: 1.4rem;
`;

const SearchBar = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 100%;
  background: #313131;
  padding: 1.5rem 5rem;
  outline: none;
  border-radius: 100px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
`;

const RecentSearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  margin: 1.5rem 0 0 2rem;
`;
