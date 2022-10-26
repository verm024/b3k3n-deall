import React from "react";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

import GlobalStyles from "./utils/globalStyles";

import { BrowserRouter as Router } from "react-router-dom";
import GlobalRoutes from "./routes/GlobalRoutes";

import { Container } from "./components/atom";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          <Container width="80%" margin="auto">
            <GlobalRoutes />
          </Container>
        </div>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
