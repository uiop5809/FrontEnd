"use client";

import { footerFirstData, footerSecondData } from "@/lib/footer/footerData";
import { styled } from "styled-components";
import NOSSR from "../common/NOSSR";
import Image from "next/image";

export default function Footer() {
  return (
    <NOSSR>
      <Layout>
        <Image
          src="/navbar/kobaco_logo_black.svg"
          alt="logo"
          width={204}
          height={49}
          style={{ marginBottom: "0.25rem" }}
        />
        <FooterBox gap="1.12rem">
          {footerFirstData.map((data: string, index: number) => {
            return (
              <FooterText weight={700} key={index}>
                {data}
              </FooterText>
            );
          })}
        </FooterBox>
        <FooterBox gap="1.06rem">
          {footerSecondData.map((data: string, index: number) => {
            return (
              <FooterText weight={400} key={index}>
                {data}
              </FooterText>
            );
          })}
        </FooterBox>
        <FooterText weight={700}>
          <span>
            Copyright(C) Korea Broadcast Advertising Corp. All Righrts Reserved
          </span>
        </FooterText>
      </Layout>
    </NOSSR>
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

const FooterBox = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.gap};
`;

const FooterText = styled.div<{ weight: number }>`
  font-size: 0.9rem;
  font-weight: ${(props) => props.weight};
`;
