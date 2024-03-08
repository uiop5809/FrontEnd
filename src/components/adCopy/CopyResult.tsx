"use client";

import styled from "styled-components";
import { Button } from "../common/ButtonStyle";
import { colors } from "@/styles/theme";
import Image from "next/image";
import { useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

const CopyResult = () => {
  const size = useWindowSize();

  const [categoryIndex, setCategoryIndex] = useState(0);
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
        <Button text={colors.white} background={colors.main}>
          카피 갤러리 바로가기
          <Image
            src={"/main/arrow-right.svg"}
            alt="right-arrow"
            width={18}
            height={18}
          />
        </Button>
      </BoxHeader>
      {categoryIndex == 0 ? (
        <BoxContents style={{ height: size.height * 0.65 }}>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                헤드 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                언어유희형
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
            <EditWrapper>
              <Image src="/adCopy/edit.svg" alt="edit" width={24} height={24} />
              <Image
                src="/adCopy/bookmark.svg"
                alt="save"
                width={24}
                height={24}
              />
            </EditWrapper>
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                헤드 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                언어유희형
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
            <EditWrapper>
              <Image src="/adCopy/edit.svg" alt="edit" width={24} height={24} />
              <Image
                src="/adCopy/bookmark.svg"
                alt="save"
                width={24}
                height={24}
              />
            </EditWrapper>
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                헤드 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                언어유희형
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
            <EditWrapper>
              <Image src="/adCopy/edit.svg" alt="edit" width={24} height={24} />
              <Image
                src="/adCopy/bookmark.svg"
                alt="save"
                width={24}
                height={24}
              />
            </EditWrapper>
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                헤드 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                언어유희형
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
            <EditWrapper>
              <Image src="/adCopy/edit.svg" alt="edit" width={24} height={24} />
              <Image
                src="/adCopy/bookmark.svg"
                alt="save"
                width={24}
                height={24}
              />
            </EditWrapper>
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                헤드 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                언어유희형
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
            <EditWrapper>
              <Image src="/adCopy/edit.svg" alt="edit" width={24} height={24} />
              <Image
                src="/adCopy/bookmark.svg"
                alt="save"
                width={24}
                height={24}
              />
            </EditWrapper>
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                헤드 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                언어유희형
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
            <EditWrapper>
              <Image src="/adCopy/edit.svg" alt="edit" width={24} height={24} />
              <Image
                src="/adCopy/bookmark.svg"
                alt="save"
                width={24}
                height={24}
              />
            </EditWrapper>
          </CopyWrapper>
        </BoxContents>
      ) : (
        <></>
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
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.875rem;
  background: ${colors.grey0};
  padding: 1rem;
  color: var(--Basic-White, #fff);
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
