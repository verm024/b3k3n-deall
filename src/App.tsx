import React from "react";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

import GlobalStyles from "./utils/globalStyles";

import { BrowserRouter as Router } from "react-router-dom";
import GlobalRoutes from "./routes/GlobalRoutes";

import { Container } from "./components/atom";
import { Navbar } from "./components/molecules";

import { store, persistor } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <GlobalStyles />
            <Navbar />
            <Container width="80%" margin="auto">
              <GlobalRoutes />
            </Container>
          </Router>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
