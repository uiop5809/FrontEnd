"use client";

import { colors } from "@/styles/theme";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import CopyModal from "../main/CopyModal";

const Category = () => {
  // 모달 버튼 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState(false);
  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const clickModal = () => setShowModal(!showModal);

  return (
    <CategoryWrapper>
      <CategoryText color={colors.grey2}>광고 카피 제작</CategoryText>
      <Image
        src="/adCopy/arrow-right.svg"
        alt="arrow-right"
        width={18}
        height={18}
      />
      <CategoryText color={colors.main}>새 카피 만들기</CategoryText>
      <QuestionIcon onClick={clickModal}>?</QuestionIcon>
      {showModal && <CopyModal clickModal={clickModal} />}
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 0.62rem;
  align-items: center;
  margin: 0.5rem 0 1.88rem 0;
`;
const CategoryText = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const QuestionIcon = styled.button`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6.25rem;
  border: 1px solid ${colors.grey0};
  background-color: transparent;
  color: ${colors.grey1};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
