"use client";

import { styled } from "styled-components";
import { colors } from "@/styles/theme";
import { useState } from "react";
import { subtitleData, titleData } from "@/lib/navbar/navbarData";

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
          {titleData.map((title: string, index: number) => {
            return <Title key={index}>{title}</Title>;
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
            {subtitleData.map((title: string[], index: number) => (
              <SubtitleBox key={index}>
                {title.map((subtitle: string) => {
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
