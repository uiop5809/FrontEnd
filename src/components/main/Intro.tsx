"use client";

import { colors } from "@/styles/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export default function Intro() {
  const Variants = {
    offscreen: {
      y: +50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.1,
      },
    },
  };

  return (
    <Layout>
      <IconBack>
        <Icon1
          src="/main/intro1.png"
          alt="bg-icon-1"
          width={182}
          height={214}
        />
        <Icon2
          src="/main/intro2.png"
          alt="bg-icon-2"
          width={148}
          height={117}
        />
        <Icon3
          src="/main/intro3.png"
          alt="bg-icon-3"
          width={335}
          height={300}
        />
        <Icon4
          src="/main/intro4.png"
          alt="bg-icon-4"
          width={227}
          height={213}
        />
        <Icon5
          src="/main/intro5.png"
          alt="bg-icon-5"
          width={146}
          height={116}
        />
        <Icon6
          src="/main/intro6.png"
          alt="bg-icon-6"
          width={182}
          height={214}
        />
      </IconBack>
      <Contents initial="offscreen" whileInView="onscreen" variants={Variants}>
        <ButtonWrapper>
          <ButtonBlock>AI analysis System for AD Creation</ButtonBlock>
        </ButtonWrapper>
        <IntroTextBlock>
          <Title>어려웠던 광고제작, </Title>
          <TitleGradient>AI 기반 광고</TitleGradient>
        </IntroTextBlock>
        <IntroTextBlock>
          <TitleGradient2>창작 지원서비스 </TitleGradient2>
          <Title2>AiSAC</Title2>
          <Title3>이 도와드려요 !</Title3>
        </IntroTextBlock>
        <LinkButtonWrapper>
          아이작 소개 영상 바로가기
          <Image
            src="/main/arrow-right.svg"
            alt="right-arrow"
            width={18}
            height={18}
          />
        </LinkButtonWrapper>
        <IntroMiniTextBlock>도움이 필요하신가요?</IntroMiniTextBlock>
      </Contents>
    </Layout>
  );
}

const Layout = styled.div`
  margin-top: 122px;
  margin-bottom: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const IconBack = styled.div`
  position: absolute;
  width: 100%;
  height: 40rem;
  padding: 0;
`;
const Icon1 = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
`;
const Icon2 = styled(Image)`
  position: absolute;
  left: 25%;
  top: 0;
`;
const Icon3 = styled(Image)`
  position: absolute;
  right: 3%;
  top: -20%;
`;
const Icon4 = styled(Image)`
  position: absolute;
  left: 10%;
  bottom: 0%;
`;
const Icon5 = styled(Image)`
  position: absolute;
  right: 20%;
  bottom: 30%;
`;
const Icon6 = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const Contents = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("main/introBg.png");
  background-size: contain;
  width: 77.125rem;
  height: 37.825rem;
`;
const ButtonWrapper = styled.div`
  height: 2.875rem;
  background: linear-gradient(0.25turn, #8e444d, #cfc0c1, #985f65);
  padding: 1px;
  border-radius: 2.1875rem;
  margin-bottom: 3.5rem;
`;
const ButtonBlock = styled.div`
  display: inline-flex;
  height: 100%;
  width: 100%;
  padding: 0.75rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 2.1875rem;
  background-color: #1a1a1a;
  // text style 적용 필요
  color: #cecece;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IntroTextBlock = styled.div`
  text-align: center;
  font-size: 3.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 5.25rem;
`;
const Title = styled.span`
  background: linear-gradient(90deg, #f0e3e5 38%, #dcaab0 99.19%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TitleGradient = styled.span`
  background: linear-gradient(91deg, #e0b4b9 59.35%, #da7b86 92.68%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 5.25rem;
`;
const TitleGradient2 = styled.span`
  background: linear-gradient(92deg, #e0b4b9 2.45%, #da7b86 36.2%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 5.25rem;
`;
const Title2 = styled.span`
  color: #d03b4d;
  font-size: 3.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 5.25rem;
`;
const Title3 = styled.span`
  color: var(--White, #fff);
  font-size: 3.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 5.25rem;
`;
const IntroMiniTextBlock = styled.div`
  color: ${colors.greyTypeMain};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`;
const LinkButtonWrapper = styled.div`
  display: inline-flex;
  padding: 1rem 2.125rem 1rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 3.6875rem;
  border: 0.5px solid ${colors.main};
  background: ${colors.main};

  color: ${colors.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 3.75rem 0;
`;
