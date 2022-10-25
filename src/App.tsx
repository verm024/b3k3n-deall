import React from "react";

import styled from "styled-components";
import GlobalStyles from "./globalStyles";

const Test = styled.div<{ color: string }>`
  width: 100px;
  height: 100px;
  background: ${({ color }) => color};
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Test color="red" />
    </div>
  );
}

export default App;
