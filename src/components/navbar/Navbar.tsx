"use client";

import { styled } from "styled-components";
import { colors } from "@/styles/theme";
import { useState } from "react";

const titleData = [
  "광고 아카이브",
  "트렌드 분석",
  "광고 카피 제작",
  "스토리보드 제작",
  "아이작 활용",
];

const subtitleData = [
  ["광고 검색", "레퍼런스 보드", "광고 데이터 분석"],
  ["인물 분석", "아이템 분석", "비교 분석"],
  ["새 카피 만들기", "갤러리"],
  ["스토리보드 만들기", "갤러리"],
  ["공지사항", "홍보 콘텐츠", "공공데이터 개발", "활용 안내"],
];

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleNavbarTrue = () => {
    setOpenNavbar(true);
  };

  const handleNavbarFalse = () => {
    setOpenNavbar(false);
  };

  return (
    <>
      <Layout>
        <LogoBox>
          <Logo src={"/navbar/kobaco_logo.svg"} alt={"kobaco"} />
        </LogoBox>
        <TitleBox
          onClick={handleNavbarTrue}
          onMouseEnter={handleNavbarTrue}
          onMouseLeave={handleNavbarFalse}
        >
          {titleData.map((title) => {
            return <Title key={title}>{title}</Title>;
          })}
        </TitleBox>
        <AuthBox>
          <div>로그인</div>
          <div>|</div>
          <div>회원가입</div>
        </AuthBox>
        {openNavbar && (
          <IndexBox
            onMouseEnter={handleNavbarTrue}
            onMouseLeave={handleNavbarFalse}
          >
            {subtitleData.map((title, index) => (
              <SubtitleBox key={index}>
                {title.map((subtitle) => {
                  return <Title key={subtitle}>{subtitle}</Title>;
                })}
              </SubtitleBox>
            ))}
          </IndexBox>
        )}
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: flex;
  width: 90%;
  height: 5.5rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 2rem;
  background: ${colors.background};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const LogoBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  color: ${colors.white};
  font-size: 1rem;
  width: 60%;
  display: flex;
  justify-content: center;
  white-space: nowrap;

  &:hover {
    color: ${colors.mainLight1};
    transition: 0.1s;
  }
`;

const AuthBox = styled.div`
  display: flex;
  width: 20%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  div {
    color: ${colors.white};
    font-size: 0.8rem;
  }
`;

const IndexBox = styled.div`
  width: 76%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(26, 26, 26, 0.4);
  backdrop-filter: blur(25px);
  border: 1px solid #333;
  border-radius: 20px;
  margin: 0 auto;
  padding: 0 7rem;
  position: fixed;
  top: 5.5rem;
  left: 0;
  right: 0;
`;

const SubtitleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  cursor: pointer;
  gap: 2rem;
  padding: 2rem 0;
`;
