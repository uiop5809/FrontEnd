"use client";

import { NavbarVariants } from "@/styles/animation";
import { motion } from "framer-motion";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <ContainerStyle variants={NavbarVariants}>{children}</ContainerStyle>;
};

export default Container;

const ContainerStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;

  margin: 0.5rem;
  width: 100%;
  padding: 2rem;
  background: #212121;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
`;
