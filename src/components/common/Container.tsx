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
  margin: 10rem 0.5rem 0.5rem 0.5rem; // 임시로

  width: 100%;
  height: 25rem;
  padding: 2rem;
  background: #212121;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
`;
