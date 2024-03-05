"use client";

import { ContainerAnimation } from "@/styles/animation";
import { motion } from "framer-motion";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <ContainerStyle variants={ContainerAnimation}>{children}</ContainerStyle>
  );
};

export default Container;

const ContainerStyle = styled(motion.div)`
  margin-top: 10rem; // 임시로
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: #212121;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
`;
