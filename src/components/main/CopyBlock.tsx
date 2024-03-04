"use client";

import { colors } from "@/styles/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../common/ButtonStyle";

export default function CopyBlock() {
  const [active, setActive] = useState(1);
  const data = [
    {
      category: "서비스 선택",
      contents: `‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’`,
      writer: "유해령",
      postDate: "2024.09.07",
      views: "1900",
    },
    {
      category: "서비스 선택",
      contents: `‘새학기 새출발엔 역시 가구지!
        책상부터 의자까지 한번에 해결할 수 있는 패키지 상품 출시!
        봄맞이 특별 할인가로 만나보세요!’`,
      writer: "유해령",
      postDate: "2024.09.07",
      views: "1900",
    },
    {
      category: "서비스 선택",
      contents: `‘내 방에서 만나는 예술 작품, 내 꿈과 미래를 그리는 공간,
      멋진 가구 하나면 충분하다.’`,
      writer: "유해령",
      postDate: "2024.09.07",
      views: "1900",
    },
  ];

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
    <>
      <Layout>
        <Title>광고 카피 제작</Title>
        <Description>
          {
            "상품/서비스 명과 키워드를 입력하면, AI가 자동으로 광고 카피 문구를 생성해줘요.\n타겟과 톤앤매너를 설정해 적절한 카피를 제작할 수 있어요."
          }
        </Description>
        <ButtonWrapper>
          <Button
            background={colors.main}
            text={colors.white}
            initial="default"
            whileHover="scaleUp"
            variants={Variants}
          >
            새 카피 만들기
          </Button>
          <Button
            background={colors.mainLight6}
            text={colors.main}
            initial="default"
            whileHover="scaleUp"
            variants={Variants}
          >
            카피 갤러리
          </Button>
        </ButtonWrapper>
        <CardBlock>
          <CardRegion>
            <CardWrapper>
              <CategoryButton>서비스 선택</CategoryButton>
              <CardContents>
                ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
              </CardContents>
            </CardWrapper>
            <CardInfoBlock>
              <CardInfo>유해령 | 2024.09.07</CardInfo>
              <CardInfo>조회 1900</CardInfo>
            </CardInfoBlock>
          </CardRegion>
          <CardRegion>
            <CardWrapper>
              <CategoryButton>서비스 선택</CategoryButton>
              <CardContents>
                {`‘새학기 새출발엔 역시 가구지!
                책상부터 의자까지 한번에 해결할 수 있는 패키지 상품 출시!
                봄맞이 특별 할인가로 만나보세요!’`}
              </CardContents>
            </CardWrapper>
            <CardInfoBlock>
              <CardInfo>유해령 | 2024.09.07</CardInfo>
              <CardInfo>조회 1900</CardInfo>
            </CardInfoBlock>
          </CardRegion>
          <CardRegion>
            <CardWrapper>
              <CategoryButton>서비스 선택</CategoryButton>
              <CardContents>
                {`‘내 방에서 만나는 예술 작품, 내 꿈과 미래를 그리는 공간,
                멋진 가구 하나면 충분하다.’`}
              </CardContents>
            </CardWrapper>
            <CardInfoBlock>
              <CardInfo>유해령 | 2024.09.07</CardInfo>
              <CardInfo>조회 1900</CardInfo>
            </CardInfoBlock>
          </CardRegion>
        </CardBlock>
        {/* <CardBlock>
         
                <CardRegion>
                  <CardWrapper>
                    <CategoryButton>{v.category}</CategoryButton>
                    <CardContents>{v.contents}</CardContents>
                  </CardWrapper>
                  <CardInfoBlock>
                    <CardInfo>
                      {v.writer} | {v.postDate}
                    </CardInfo>
                    <CardInfo>조회 {v.views}</CardInfo>
                  </CardInfoBlock>
                </CardRegion>
            
        </CardBlock> */}
      </Layout>
    </>
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
`;
const CardBlock = styled.div`
  display: inline-flex;
  gap: 5rem;
  margin-top: 6.25rem;
`;
const CardRegion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.38rem;
`;
const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 25rem;
  height: 12.4375rem;
  justify-content: center;
  align-items: center;
  gap: 0.0625rem;
  flex-shrink: 0;
  border-radius: 0.875rem;
  border: 1px solid rgba(66, 66, 70, 0.5);
  background: #262525;
`;
const CategoryButton = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.375rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.375rem;
  border: 1px solid ${colors.greyTypeMain};

  color: ${colors.greyTypeMain};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CardContents = styled.div`
  color: ${colors.greyTypeMain};
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  white-space: pre-line;
`;
const CardInfoBlock = styled.div`
  display: inline-flex;
  padding: 0 1rem;
  justify-content: space-between;
`;
const CardInfo = styled.div`
  color: ${colors.greyTypeMain};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
