import React, { useState } from "react";
import styled from "styled-components";

interface ToggleButtonProps {
  items: string[];
}

const RadioButtons = (props: ToggleButtonProps) => {
  const [selectedOption, setSelectedOption] = useState(1);
  const { items } = props;

  return (
    <RadioButtonsWrapper>
      {items.map((item, index) => (
        <RadioButtonLabel
          key={index}
          selected={selectedOption === index + 1}
          onClick={() => setSelectedOption(index + 1)}
        >
          {item}
        </RadioButtonLabel>
      ))}
    </RadioButtonsWrapper>
  );
};

export default RadioButtons;

const RadioButtonsWrapper = styled.div`
  display: flex;
  jusitfy-content: space-between;
  align-items: center;
  gap: 0.5rem;
  background: #383838;
  color: #b4b4b4;
  border-radius: 100px;
  padding: 0.3rem;
`;

const RadioButtonLabel = styled.label<{ selected: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#EFEFEF" : "transparent")};
  color: ${({ selected }) => (selected ? "#595959" : "#b4b4b4")};
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;
  transition: all 0.2s;
`;
