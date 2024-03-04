import { useState } from "react";
import { SearchModalBox, SearchModalContent } from "../common/ModalStyle";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../common/ButtonStyle";
import { colors } from "@/styles/theme";
import { videoKey } from "@/constants/videoKey";
import YouTube from "react-youtube";

const StoryModal = (props) => {
  // 전달받은 state 함수
  const { clickModal } = props;

  return (
    // 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다.
    <SearchModalBox onClick={clickModal}>
      <SearchModalContent
        width="50rem"
        height="32.875rem"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalContent>
          <CloseButton onClick={clickModal}>
            <Image src="/main/Cross.svg" alt="close" width={30} height={30} />
          </CloseButton>
          <Title>스토리보드 제작 이용 가이드</Title>
          <YouTube
            videoId={videoKey}
            opts={{
              width: "800",
              height: "370",
              playerVars: {
                autoplay: 1, //자동재생 O
                rel: 0, //관련 동영상 표시하지 않음
                modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
              },
            }}
            //이벤트 리스너
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </ModalContent>
      </SearchModalContent>
    </SearchModalBox>
  );
};

export default StoryModal;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 110px 0;
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
  color: ${colors.grey4};
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 38px;
`;
