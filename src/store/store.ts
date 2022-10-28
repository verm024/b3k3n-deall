import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { bookmarkReducer } from "./reducers";

const rootReducer = combineReducers({
  bookmark: bookmarkReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["bookmark"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
