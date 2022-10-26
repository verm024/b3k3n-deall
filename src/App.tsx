import React from "react";

import styled from "styled-components";
import GlobalStyles from "./globalStyles";

import { Text } from "./components/atom";

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
      <Test color="red" />
    </div>
  );
}

export default App;
