import { configureStore } from "@reduxjs/toolkit";

import { bookmarkReducer } from "./reducers";

const reducer = {
  bookmark: bookmarkReducer,
};

const store = configureStore({ reducer, devTools: true });

export type RootState = ReturnType<typeof store.getState>;
export default store;
