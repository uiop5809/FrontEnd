"use client";

import { footerFirstData, footerSecondData } from "@/lib/footer/footerData";
import { styled } from "styled-components";

export default function Footer() {
  return (
    <Layout>
      <FooterBox>
        {footerFirstData.map((data: string, index: number) => {
          return <FooterText key={index}>{data}</FooterText>;
        })}
      </FooterBox>
      <FooterBox>
        {footerSecondData.map((data: string, index: number) => {
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
