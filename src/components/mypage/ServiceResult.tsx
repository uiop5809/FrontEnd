"use client";

import styled from "styled-components";
import { colors } from "@/styles/theme";
import Image from "next/image";
import { useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

const ServiceResult = () => {
  const size = useWindowSize();
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <BoxWrapper>
      {categoryIndex == 0 ? (
        <BoxContents style={{ height: size.height * 0.65 }}>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.secondary} background={colors.secondaryLight3}>
                바디 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                톤 앤 매너
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                바디 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                톤 앤 매너
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                바디 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                톤 앤 매너
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                바디 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                톤 앤 매너
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                바디 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                톤 앤 매너
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
          </CopyWrapper>
          <CopyWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                바디 카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                톤 앤 매너
              </Tag>
            </TagWrapper>
            ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
          </CopyWrapper>
        </BoxContents>
      ) : (
        <></>
      )}
    </BoxWrapper>
  );
};

export default ServiceResult;

const BoxWrapper = styled.div`
  width: 60%;
  padding-left: 1.38rem;
`;
const BoxContents = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: space-between;
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
  padding: 1rem 1rem 2rem 1rem;
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
  margin-bottom: 2rem;
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
