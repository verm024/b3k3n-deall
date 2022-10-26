import React from "react";

import styled from "styled-components";
import GlobalStyles from "./globalStyles";

import { Text } from "./components/atom";

import { Tag } from "./components/molecules";

const Test = styled.div<{ color: string }>`
  width: 100px;
  height: 100px;
  background: ${({ color }) => color};
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Text italic textType="h2">
        Halo
      </Text>
      <Tag onClick={() => alert("clicked")} cursor="pointer">
        Haloo
      </Tag>
      <Tag>Text yang panjang panjang</Tag>
      <Test color="red" />
    </div>
  );
}

export default App;
