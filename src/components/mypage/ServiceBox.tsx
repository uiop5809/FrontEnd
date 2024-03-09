"use client";

import { serviceOption, toneMannerOption } from "@/lib/user/userData";
import { colors } from "@/styles/theme";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ServiceBox = () => {
  const [values, setValues] = useState({
    service: "",
    toneManner: "",
  });

  const [category, setCategory] = useState("");
  const [toneManner, setToneManner] = useState("");
  const categoryClick = (opt: string) => {
    category === opt ? setCategory("") : setCategory(opt);
  };
  const toneMannerClick = (opt: string) => {
    toneManner === opt ? setToneManner("") : setToneManner(opt);
  };

  const [canSubmit, setCanSubmit] = useState(false);
  const [okSubmit, setOkSubmit] = useState(false);
  const handleSubmit = () => {
    setValues({ service: category, toneManner: toneManner });
    if (canSubmit) {
      setOkSubmit(true);
    }
  };

  useEffect(() => {
    if (category !== "" && toneManner !== "") {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [category, toneManner]);

  return (
    <BoxWrapper>
      <BoxContent id="createCopy">
        <Contents focus={""} opt={"none"}>
          서비스 선택
          <InlineContent gap="0.5rem">
            {serviceOption.map((item) => (
              <ToneButton
                key={item.id}
                active={category == item.name}
                color={colors.main}
                background="#212121"
                onClick={() => categoryClick(item.name)}
              >
                {item.name}
              </ToneButton>
            ))}
          </InlineContent>
        </Contents>

        <Contents focus={""} opt={"none"}>
          톤 앤 매너
          <InlineContent gap="0.5rem">
            {toneMannerOption.map((item) => (
              <ToneButton
                key={item.id}
                active={toneManner == item.name}
                color={colors.main}
                background="#212121"
                onClick={() => toneMannerClick(item.name)}
              >
                {item.name}
              </ToneButton>
            ))}
          </InlineContent>
        </Contents>
      </BoxContent>

      <SubmitButton
        onClick={handleSubmit}
        okSubmit={okSubmit}
        disabled={!canSubmit}
      >
        적용하기
      </SubmitButton>
    </BoxWrapper>
  );
};

export default ServiceBox;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: space-between;
  flex-shrink: 0;
  border-radius: 0.875rem;
  background: #212121;
  padding: 1.88rem 2.5rem;
  align-items: center;
`;
const InlineContent = styled.div<{ gap: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.gap};
  margin-bottom: 1rem;
`;
const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  gap: 1.5rem;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
const Contents = styled.div<{ focus: string; opt: string }>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  gap: 1rem;
  color: ${(props) => (props.focus === props.opt ? colors.main : colors.white)};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const ToneButton = styled.button<{
  active: boolean;
  color: string;
  background: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.825rem;
  border: 1px solid ${(props) => (props.active ? props.color : colors.grey1)};
  background: ${(props) => (props.active ? props.background : "transparent")};
  color: ${(props) => (props.active ? props.color : colors.grey1)};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.5rem 1.3rem;
  cursor: pointer;
  &:focus {
    outline-color: ${colors.main};
    outline-offset: 0;
    outline-width: 1px;
    outline-style: solid;
    border-color: transparent;
  }
`;

const SubmitButton = styled.button<{ okSubmit: boolean; disabled: boolean }>`
  display: flex;
  width: 100%;
  padding: 0.75rem 2.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 2.1875rem;
  border: none;
  margin-top: 1.88rem;
  color: ${(props) => (props.okSubmit ? colors.white : "#5D5D5D")};
  background: ${(props) => (props.okSubmit ? colors.main : "#393939")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    color: ${(props) => (props.disabled ? colors.grey05 : colors.white)};
    background: ${(props) => (props.disabled ? "#393939" : colors.main)};
    transition: 0.3s;
  }
`;
