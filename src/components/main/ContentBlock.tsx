"use client";

import { colors } from "@/styles/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

interface ContentBlockProps {
  title: string;
  description: string;
  card: Card[];
}

interface Card {
  title: string;
  description: string;
  img: string;
}

export default function ContentBlock(props: ContentBlockProps) {
  const { title, description, card } = props;

  const Variants = {
    default: {
      scale: 1,
    },
    scaleUp: {
      scale: 1.2,
      transition: {
        duration: 0.25,
        delay: 0,
      },
    },
  };

  return (
    <Layout>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CardBlock>
        {card.map((v, i) => (
          <CardWrapper
            initial="default"
            whileHover="scaleUp"
            variants={Variants}
          >
            <ImageWrapper>
              <Image src={v.img} alt={`card-image.${i}`} fill />
            </ImageWrapper>
            <CardTitle>{v.title}</CardTitle>
            <CardDescription>{v.description}</CardDescription>
          </CardWrapper>
        ))}
      </CardBlock>
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
const CardBlock = styled.div`
  display: inline-flex;
  gap: 5rem;
  margin-top: 6.25rem;
`;
const CardWrapper = styled(motion.div)`
  width: 21rem;
  height: 23.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid rgba(66, 66, 70, 0.6);
  background: linear-gradient(
      180deg,
      rgba(18, 18, 19, 0.3) 5.49%,
      rgba(211, 59, 77, 0.01) 65.69%,
      rgba(37, 37, 39, 0.06) 81.1%
    ),
    #262525;
  backdrop-filter: blur(2px);
  cursor: pointer;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 50%;
  margin-bottom: 1.5rem;
`;
const CardTitle = styled.div`
  width: 100%;
  color: ${colors.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const CardDescription = styled.div`
  color: ${colors.greyTypeMain};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;
