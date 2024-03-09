"use client";

import { useState } from "react";
import { styled } from "styled-components";

const MyIndex = () => {
  const [selected, setSelected] = useState(1);

  return (
    <Layout>
      <Index selected={selected === 1} onClick={() => setSelected(1)}>
        마이 카피
      </Index>
      <Index selected={selected === 2} onClick={() => setSelected(2)}>
        마이 스토리보드
      </Index>
    </Layout>
  );
};

export default MyIndex;

const Layout = styled.div`
  display: flex;
  text-align: center;
  cursor: pointer;
`;

const Index = styled.div<{ selected: boolean }>`
  width: 10rem;
  padding: 0.7rem 0;
  border-bottom: 2px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.main : theme.colors.grey1};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.grey1};
  white-space: nowrap;
`;
