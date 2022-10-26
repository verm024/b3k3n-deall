import React from "react";

import styled from "styled-components";
import GlobalStyles from "./utils/globalStyles";

import { BrowserRouter as Router } from "react-router-dom";
import GlobalRoutes from "./routes/GlobalRoutes";

import { Text, Container, Spacer } from "./components/atom";
import { Tag } from "./components/molecules";

const Test = styled.div<{ color: string }>`
  width: 100px;
  height: 100px;
  background: ${({ color }) => color};
`;

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="95%"
          margin="auto"
        >
          <p>test</p>
          <p>test</p>
        </Container>
        <Container width="90%" margin="auto">
          <GlobalRoutes />
        </Container>
      </div>
    </Router>
  );
}

export default App;
