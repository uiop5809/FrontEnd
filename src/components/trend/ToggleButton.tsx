import React, { useState } from "react";
import styled from "styled-components";

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <RadioButtonsWrapper>
      <RadioButtonLabel selected={selectedOption === 1}>
        <RadioInput
          type="radio"
          value="option1"
          checked={selectedOption === 1}
          onChange={() => setSelectedOption(1)}
        />
        일별
      </RadioButtonLabel>
      <RadioButtonLabel selected={selectedOption === 2}>
        <RadioInput
          type="radio"
          value="option2"
          checked={selectedOption === 2}
          onChange={() => setSelectedOption(2)}
        />
        월별
      </RadioButtonLabel>
      <RadioButtonLabel selected={selectedOption === 3}>
        <RadioInput
          type="radio"
          value="option3"
          checked={selectedOption === 3}
          onChange={() => setSelectedOption(3)}
        />
        주별
      </RadioButtonLabel>
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

const RadioInput = styled.input`
  display: none;
`;
