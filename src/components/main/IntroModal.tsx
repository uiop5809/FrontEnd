import { useState } from "react";
import { SearchModalBox, SearchModalContent } from "../common/ModalStyle";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../common/ButtonStyle";
import { colors } from "@/styles/theme";

const IntroModal = (props) => {
  // 전달받은 state 함수
  const { clickModal } = props;

  return (
    // 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다.
    <SearchModalBox onClick={clickModal}>
      <SearchModalContent onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <CloseButton onClick={clickModal}>
            <Image src="/main/Cross.svg" alt="close" width={30} height={30} />
          </CloseButton>
          <Title>광고 제작이 처음이신가요?</Title>
          <SubTitle>
            {
              "광고는 아래와 같은 순서로 만들어져요.\n광고 아카이브를 통해 참고영상부터 빠르게 찾아보세요!"
            }
          </SubTitle>
          <BottomButton bgColor={colors.main} textColor={colors.white}>
            광고 아카이브
            <Image
              src="/main/arrow-right.svg"
              alt="right-arrow"
              width={24}
              height={24}
            />
            트렌드 분석
            <Image
              src="/main/arrow-right.svg"
              alt="right-arrow"
              width={18}
              height={18}
            />
            광고카피 제작
            <Image
              src="/main/arrow-right.svg"
              alt="right-arrow"
              width={18}
              height={18}
            />
            스토리보드 제작
          </BottomButton>
        </ModalContent>
      </SearchModalContent>
    </SearchModalBox>
  );
};

export default IntroModal;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  justify-content: center;
  align-items: center;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 2.125rem;
  height: 2.125rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0px;
  border-radius: 6.25rem;
  background: #343434;
  cursor: pointer;
`;
const Title = styled.h1`
  color: #efefef;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1rem;
`;
const SubTitle = styled.h1`
  color: #b4b4b4;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  white-space: pre-line;
`;
const BottomButton = styled(Button)`
  padding: 0.625rem 1.5rem;
  gap: 0.125rem;
  font-size: 1rem;
  margin-top: 2.5rem;
`;
