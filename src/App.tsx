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
          display="block"
          alignItems="center"
          justifyContent="center"
          width="90%"
          margin="auto"
        >
          <Text italic textType="h2">
            Halo
          </Text>
          <Spacer size={64} />
          <Tag onClick={() => alert("clicked")} cursor="pointer">
            Haloo
          </Tag>
          <Tag>Text yang panjang panjang</Tag>
          <Test color="red" />
        </Container>

        <GlobalRoutes />
      </div>
    </Router>
  );
}

export default App;
