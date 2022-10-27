import React from "react";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

import GlobalStyles from "./utils/globalStyles";

import { BrowserRouter as Router } from "react-router-dom";
import GlobalRoutes from "./routes/GlobalRoutes";

import { Container } from "./components/atom";
import { Navbar } from "./components/molecules";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <GlobalStyles />
          <Navbar />
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
