"use client";

import { storyBoardData } from "@/lib/data";
import { colors } from "@/styles/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "../common/Button";

export default function StoryBlock() {
  const Variants = {
    default: {
      scale: 1,
    },
    scaleUp: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        delay: 0,
      },
    },
  };
  return (
    <Layout>
      <Title>스토리보드 제작</Title>
      <Description>
        {
          "텍스트를 입력하면 Ai가 맞춤형 이미지를 생성해주고,\n외부 오픈소스를 넣거나 직접 그림을 그려 스토리보드를 만들 수 있어요."
        }
      </Description>
      <ButtonWrapper>
        <Button
          bgColor={colors.main}
          textColor={colors.white}
          initial="default"
          whileHover="scaleUp"
          variants={Variants}
        >
          새 카피 만들기
        </Button>
        <Button
          bgColor={colors.mainLight6}
          textColor={colors.main}
          initial="default"
          whileHover="scaleUp"
          variants={Variants}
        >
          이용 가이드
        </Button>
      </ButtonWrapper>
      <CardBlock>
        {storyBoardData[0].map((v, i) => (
          <CardRegion>
            <CardWrapper>
              <ImageWrapper>
                <Image src={v.img} alt={`storyboard-image.${i}`} fill />
              </ImageWrapper>
            </CardWrapper>
            <CardInfoBlock>
              <CardInfo>
                {v.writer} | {v.name}
              </CardInfo>
            </CardInfoBlock>
          </CardRegion>
        ))}
      </CardBlock>
      <CardBlock>
        {storyBoardData[1].map((v, i) => (
          <CardRegion>
            <CardWrapper>
              <ImageWrapper>
                <Image src={v.img} alt={`storyboard-image.${i}`} fill />
              </ImageWrapper>
            </CardWrapper>
            <CardInfoBlock>
              <CardInfo>
                {v.writer} | {v.name}
              </CardInfo>
            </CardInfoBlock>
          </CardRegion>
        ))}
      </CardBlock>
      <LinkButtonWrapper
        bgColor="#252525"
        textColor={colors.greyTypeMain}
        initial="default"
        whileHover="scaleUp"
        variants={Variants}
      >
        더 많은 스토리보드 보기
        <Image
          src="/main/arrow-right.svg"
          alt="right-arrow"
          width={18}
          height={18}
        />
      </LinkButtonWrapper>
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16rem;
`;
const Title = styled.div`
  color: ${colors.white};
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.875rem;
  margin-bottom: 1.56rem;
`;
const Description = styled.div`
  color: ${colors.greyTypeMain};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  white-space: pre-line;
`;
const ButtonWrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 6.25rem;
`;
const CardBlock = styled.div`
  display: inline-flex;
  gap: 5rem;
`;
const CardRegion = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 22.875rem;
  height: 14.0625rem;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: 0.0625rem;
  flex-shrink: 0;
  border-radius: 0.875rem;
`;
const CardInfoBlock = styled.div`
  display: inline-flex;
  padding: 0 1rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
const CardInfo = styled.div`
  color: ${colors.greyTypeMain};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 0.75rem;
`;
const LinkButtonWrapper = styled(Button)`
  border-color: #252525;
  margin-top: 3rem;
`;
