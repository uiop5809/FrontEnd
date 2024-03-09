"use client";

import styled from "styled-components";
import { Button } from "../common/ButtonStyle";
import { colors } from "@/styles/theme";
import Image from "next/image";
import { useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";

interface CopyItem {
  category: string;
  tone: string;
  copyText: string;
}

const data = [
  {
    category: "헤드카피",
    tone: "언어유희형",
    copyText: "내가 사는 지역을 더 살기 좋게, 더 매력 있게",
  },
  {
    category: "헤드카피",
    tone: "언어유희형",
    copyText: "내가 사는 지역을 더 살기 좋게, 더 매력 있게2",
  },
  {
    category: "헤드카피",
    tone: "언어유희형",
    copyText: "내가 사는 지역을 더 살기 좋게, 더 매력 있게3",
  },
  {
    category: "헤드카피",
    tone: "언어유희형",
    copyText: "내가 사는 지역을 더 살기 좋게, 더 매력 있게4",
  },
  {
    category: "헤드카피",
    tone: "언어유희형",
    copyText: "내가 사는 지역을 더 살기 좋게, 더 매력 있게5",
  },
  {
    category: "헤드카피",
    tone: "언어유희형",
    copyText: "내가 사는 지역을 더 살기 좋게, 더 매력 있게6",
  },
];
const CopyResult = () => {
  const size = useWindowSize();

  const [categoryIndex, setCategoryIndex] = useState(0);

  const [editingStates, setEditingStates] = useState(
    data.map((data) => ({ isEditing: false, text: data.copyText }))
  );

  const [currentSave, setCurrentSave] = useState<CopyItem[]>([]);
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);

  const handleEditClick = (index: number) => {
    setEditingStates((prevStates) =>
      prevStates.map((state, i) =>
        i === index ? { ...state, isEditing: !state.isEditing } : state
      )
    );
  };

  const handleCancelClick = (index: number) => {
    setEditingStates((prevStates) =>
      prevStates.map((state, i) =>
        i === index ? { ...state, isEditing: false } : state
      )
    );
  };

  const handleSaveClick = (index: number) => {
    console.log("Text saved:", editingStates[index].text);
    setEditingStates((prevStates) =>
      prevStates.map((state, i) =>
        i === index ? { ...state, isEditing: false } : state
      )
    );
    const newData = [...data];
    newData[index].copyText = editingStates[index].text;
  };

  const handleTextChange = (index: number, newText: string) => {
    setEditingStates((prevStates) =>
      prevStates.map((state, i) =>
        i === index ? { ...state, text: newText } : state
      )
    );
  };

  // 현재 북마크 취소는 순서대로 누른 경우만..!
  const handleBookmarkClick = (index: number) => {
    setBookmarkedItems((prevItems) =>
      prevItems.includes(index)
        ? prevItems.filter((item) => item !== index)
        : [...prevItems, index]
    );
    setCurrentSave((prevSave) =>
      prevSave.some((item) => item === data[index])
        ? prevSave.filter((item) => item !== data[index])
        : [...prevSave, data[index]]
    );
  };

  return (
    <BoxWrapper>
      <BoxHeader>
        <CategoryBox>
          <Category
            onClick={() => setCategoryIndex(0)}
            active={categoryIndex == 0}
          >
            전체
          </Category>
          <Category
            onClick={() => setCategoryIndex(1)}
            active={categoryIndex == 1}
          >
            최근 저장한 항목
          </Category>
        </CategoryBox>
        <Link href="/adCopy/copyGallery">
          <Button text={colors.white} background={colors.main}>
            카피 갤러리 바로가기
            <Image
              src={"/main/arrow-right.svg"}
              alt="right-arrow"
              width={18}
              height={18}
            />
          </Button>
        </Link>
      </BoxHeader>
      {categoryIndex == 0 ? (
        <BoxContents style={{ height: size.height * 0.65 }}>
          {data.map((v, i) => (
            <CopyWrapper key={i}>
              <TagWrapper>
                <Tag color={colors.main} background={colors.mainLight6}>
                  {v.category}
                </Tag>
                <Tag color={colors.grey1} background={colors.grey5}>
                  {v.tone}
                </Tag>
              </TagWrapper>
              {editingStates[i].isEditing ? (
                <EditBox
                  value={editingStates[i].text}
                  onChange={(e) => handleTextChange(i, e.target.value)}
                />
              ) : (
                <>‘{v.copyText}’</>
              )}
              <EditWrapper>
                {editingStates[i].isEditing ? (
                  <>
                    <BottomText
                      onClick={() => handleCancelClick(i)}
                      color={colors.grey1}
                    >
                      취소
                    </BottomText>
                    <BottomText
                      onClick={() => handleSaveClick(i)}
                      color={colors.main}
                    >
                      완료
                    </BottomText>
                  </>
                ) : (
                  <>
                    <Image
                      src="/adCopy/edit.svg"
                      alt="edit"
                      width={24}
                      height={24}
                      onClick={() => handleEditClick(i)}
                      style={{ cursor: "pointer" }}
                    />
                    <Image
                      src={
                        bookmarkedItems.includes(i)
                          ? "/adCopy/bookmarkRed.svg"
                          : "/adCopy/bookmark.svg"
                      }
                      alt="save"
                      width={24}
                      height={24}
                      onClick={() => handleBookmarkClick(i)}
                      style={{ cursor: "pointer" }}
                    />
                  </>
                )}
              </EditWrapper>
            </CopyWrapper>
          ))}
        </BoxContents>
      ) : (
        <BoxContents style={{ height: size.height * 0.65 }}>
          {currentSave.map((v, i) => (
            <CopyWrapper key={i}>
              <TagWrapper>
                <Tag color={colors.main} background={colors.mainLight6}>
                  {v.category}
                </Tag>
                <Tag color={colors.grey1} background={colors.grey5}>
                  {v.tone}
                </Tag>
              </TagWrapper>
              {editingStates[i].isEditing ? (
                <EditBox
                  value={editingStates[i].text}
                  onChange={(e) => handleTextChange(i, e.target.value)}
                />
              ) : (
                <>‘{v.copyText}’</>
              )}
              <EditWrapper>
                {editingStates[i].isEditing ? (
                  <>
                    <BottomText
                      onClick={() => handleCancelClick(i)}
                      color={colors.grey1}
                    >
                      취소
                    </BottomText>
                    <BottomText
                      onClick={() => handleSaveClick(i)}
                      color={colors.main}
                    >
                      완료
                    </BottomText>
                  </>
                ) : (
                  <>
                    <Image
                      src="/adCopy/edit.svg"
                      alt="edit"
                      width={24}
                      height={24}
                      onClick={() => handleEditClick(i)}
                      style={{ cursor: "pointer" }}
                    />
                    <Image
                      src={
                        bookmarkedItems.includes(i)
                          ? "/adCopy/bookmarkRed.svg"
                          : "/adCopy/bookmark.svg"
                      }
                      alt="save"
                      width={24}
                      height={24}
                      onClick={() => handleBookmarkClick(i)}
                      style={{ cursor: "pointer" }}
                    />
                  </>
                )}
              </EditWrapper>
            </CopyWrapper>
          ))}
          <MoreRegion>
            <Button
              text={"#b4b4b4"}
              background={"#252525"}
              style={{ height: "2.75rem", border: "none" }}
            >
              더보기
            </Button>
          </MoreRegion>
        </BoxContents>
      )}
    </BoxWrapper>
  );
};

export default CopyResult;

const BoxWrapper = styled.div`
  width: 60%;
  padding-left: 1.38rem;
`;
const BoxHeader = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.875rem;
`;
const CategoryBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;
const Category = styled.div<{ active: boolean }>`
  color: ${(props) => (props.active ? colors.main : colors.grey1)};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.75rem;
  cursor: pointer;
`;
const BoxContents = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-right: 0.875rem;

  &::-webkit-scrollbar-track {
    margin: 1rem;
    border-radius: 10px;
    background-color: ${colors.grey0};
  }
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.main};
  }
`;
const CopyWrapper = styled.div`
  display: flex;
  width: 49%;
  height: 12.5rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.875rem;
  background: ${colors.grey0};
  padding: 1rem;
  color: ${colors.white};
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-bottom: 2%;
`;
const TagWrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;
const Tag = styled.div<{ color: string; background: string }>`
  padding: 0.375rem 0.875rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.375rem;
  border: 1px solid ${(props) => props.color};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const EditWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: end;
  gap: 0.62rem;
  margin-top: 2.75rem;
`;
const BottomText = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
const EditBox = styled.textarea`
  resize: none;
  height: 1.375rem;
  background-color: ${colors.grey0};
  border: none;
  outline: none;
  color: ${colors.white};
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;
const MoreRegion = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
