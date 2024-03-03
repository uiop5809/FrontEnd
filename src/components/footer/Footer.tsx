"use client";

import { styled } from "styled-components";

const footerFirstData = [
  "AiSAC이란?",
  "서비스 이용약관",
  "개인정보 처리방침",
  "이메일 무단수집 거부",
];

const footerSecondData = [
  "주소 : 서울시 중구 세종대로 124",
  "담당부서 : 지능정보사업팀",
  "02) 731-7350",
  "이용문의 : 카카오톡 채널",
  "kobaco_AiSAC",
];

export default function Footer() {
  return (
    <Layout>
      <FooterBox>
        {footerFirstData.map((data, index) => {
          return <FooterText key={index}>{data}</FooterText>;
        })}
      </FooterBox>
      <FooterBox>
        {footerSecondData.map((data, index) => {
          return <FooterText key={index}>{data}</FooterText>;
        })}
      </FooterBox>
      <FooterText>
        <span>
          Copyright(C) Korea Broadcast Advertising Corp. All Righrts Reserved
        </span>
      </FooterText>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #888;
  margin-bottom: 3rem;
  gap: 0.5rem;
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const FooterText = styled.div`
  font-size: 0.9rem;
  span {
    font-weight: 800;
  }
`;
